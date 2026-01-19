const {ethers} = require("ethers");
require('dotenv').config({ path: __dirname + '/.env' });

const provider = new ethers.provider.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_API_KEY}`);