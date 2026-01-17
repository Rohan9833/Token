const {expect} = require("chai");
const { ethers } = require("hardhat");


describe("Publicfunding contract", async function(){
    let pf;
    let owner,donor1,donor2,donor3,donor4,donor5;
    beforeEach(async function () {
        [owner,donor1,donor2,donor3,donor4,donor5] = await ethers.getSigners();
        const Publicfunding = await ethers.getContractFactory("Publicfunding");
        pf = await Publicfunding.deploy();
    });

    describe("donate function",async function () {
        it("record update",async function () {
            await pf.donate({value:ethers.parseEther("1")});

            const donated = await pf.donationrecord(owner.address);
             expect(donated).to.equal(ethers.parseEther("1"));
        })

        it("donating succes or not",async function(){
             expect(pf.donate({value:ethers.parseEther("1")})).to.not.be.revertedWith("donation unscuessfull");
        });

        it("allowed multiple donations by same user",async function(){
            expect(
                pf.connect(donor1).donate({value:ethers.parseEther("1")}),
                pf.connect(donor1).donate({value:ethers.parseEther("2")}),
                pf.connect(donor1).donate({value:ethers.parseEther("3")}),
                pf.connect(donor1).donate({value:ethers.parseEther("1")})
            ).to.not.be.revertedWith("can't do multiple donations"); 
        });

        it("allowed multiple donations by multiple user",async function(){
            expect(
                pf.connect(donor1).donate({value:ethers.parseEther("1")}),
                pf.connect(donor2).donate({value:ethers.parseEther("2")}),
                pf.connect(donor3).donate({value:ethers.parseEther("3")}),
                pf.connect(donor4).donate({value:ethers.parseEther("1")})
            ).to.not.be.revertedWith("can't do multiple donations"); 
        });
    });
});