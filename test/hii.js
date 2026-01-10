const {expect} = require("chai");
const { ethers } = require("hardhat");
describe("hii contract", async function () {
    const[owner] = ethers.getSigner();

    const Hi = await ethers.getContractFactory("hii");
    const hii = Hi.deploy();

    it("trying", async function(){
        await hii.withdraw();
    })
})