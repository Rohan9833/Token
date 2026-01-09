const { ethers } = require("hardhat");

async function main(){

    const [admin] = await ethers.getSigners();
    Election = await ethers.getContractFactory("election");
    election = await Election.deploy();

    const electionaddress = await election.getAddress();
    const txHash = election.deploymentTransaction().hash;
    console.log("election address:",electionaddress);
    console.log("Transaction Hash:",txHash);


}


main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});