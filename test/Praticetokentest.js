const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Praticetoken contract", async function () {
    const[owner] = ethers.getSigner();

    const PraticeToken = await ethers.getContractFactory("Praticetoken");
    const praticeToken = PraticeToken.deploy();

   
})