const {expect} = require("chai");
// const {ethers} = require("ethers");
const { ethers } = require("hardhat");
// const {isCallTrace} = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("Election contract",async function(){
    
    let election;
    let owner,voter1,voter2,voter3,voter4;

    beforeEach(async function () {
        const Election =  await ethers.getContractFactory("election");
         election = await Election.deploy();
        [owner,voter1,voter2,voter3,voter4]= await ethers.getSigners();
    });

    it("vote Success or fail", async function () {
        expect(await election.hasvoted(owner.address)).to.equal(false);  
        await election.connect(owner).voting(1);
        expect(await election.hasvoted(owner.address)).to.equal(true);
    });

    it("bjp getting vote when pressed bjp", async function(){
        await election.voting(0);
        expect(await election.bjpcount()).to.equal(1);
        expect(await election.congresscount()).to.equal(0);
    });

    it("congress getting vote when pressed congress",async function(){
        await election.voting(1);
        expect(await election.bjpcount()).to.equal(0);
        expect(await election.congresscount()).to.equal(1);
    })

    it("one person cant vote twice", async function(){
        await election.connect(voter1).voting(0);
        await expect( election.connect(voter1).voting(0)).to.be.revertedWith("already voted");
        await expect( election.connect(voter1).voting(1)).to.be.revertedWith("already voted");
    })

});