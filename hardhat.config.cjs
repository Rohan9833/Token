require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "ql874SpAdcn7KlLmlzYrZ";
const SEPOLIA_PRIVATE_KEY = "bbb6369cf4a8d8dfd07fa4c99d6be84a05c3e2563ba032399b9f9d4a8801f08b";
module.exports = {
  solidity: "0.8.28",

  networks:{
    sepolia :{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`]
    }
    
  }
};