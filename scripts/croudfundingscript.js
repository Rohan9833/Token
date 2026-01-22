const { ethers } = require("hardhat");

async function main(){
    const [admin] = await ethers.getSigners();
    const Funding = await ethers.getContractFactory("Crowd_Funding");
    const funding = await Funding.deploy();
    
    const Contractaddress = await funding.getAddress();

    console.log("Contract address:- ",Contractaddress);

}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});