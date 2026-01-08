const {expect} = require("chai");
// const {ethers} = require("ethers");
const { ethers } = require("hardhat");
// const {isCallTrace} = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("Token Contract",function(){
  it("Deploymenrt should assign the total value to the balance of owner",async function() {

    const[owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    deployed = await Token.deploy();

    const ownerbalance = deployed.balancecheck(owner.address);

    expect(ownerbalance == deployed.totalSupply());

  }); 

  it("Testing Transfer Function", async function () {

    const[owner,add1,add2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    deployed = await Token.deploy();
    //owner to add1 50 token bhej raha hu
    await deployed.transfer(add1,50);

    expect(deployed.balancecheck(add1)==50);
    //add1 se 25 token to add2
    await deployed.connect(add1).transfer(add2,25);

    expect(deployed.balancecheck(add2)== 25);
    
  })
}); 
