


async function  main (){
    const [admin] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    tokenkaaddress = await token.getAddress();
    const txHash = token.deploymentTransaction().hash;
    console.log("Transaction Hash:", txHash);
    console.log("token deployed",tokenkaaddress);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
