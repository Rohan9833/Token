require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: __dirname + '/.env' });
console.log("Key Loaded:", process.env.ALCHEMY_API_KEY);
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
// const ALCHEMY_API_KEY = "ql874SpAdcn7KlLmlzYrZ";
// const SEPOLIA_PRIVATE_KEY = "bbb6369cf4a8d8dfd07fa4c99d6be84a05c3e2563ba032399b9f9d4a8801f08b";
module.exports = {
  solidity: "0.8.28",

  networks:{
    sepolia :{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
    
  }
};