const {ethers} = require("ethers");
require('dotenv').config();
const artifact = require("./artifacts/contracts/token.sol/token.json");
const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`);
const Contractaddress="0x6d361AC65264f299920691691D327d5Dc559c30f";
const abi = artifact.abi;

const queryBlockchain = async()=>{
    const Token = new ethers.Contract(Contractaddress,abi,provider);

    const contractname = await  Token.name();
    console.log(contractname);


}

queryBlockchain();