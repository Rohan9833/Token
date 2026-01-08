const {expect} = require("chai");
// const {ethers} = require("ethers");
const { ethers } = require("hardhat");
const {isCallTrace} = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

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
});