async function  main (){
    const [admin] = await ethers.getSigners();
    const Praticetoken = await ethers.getContractFactory("Token");
    const praticetoken = await Praticetoken.deploy();

    tokenkaaddress = await praticetoken.getAddress();
    const txHash = praticetoken.deploymentTransaction().hash;
    console.log("Transaction Hash:", txHash);
    console.log("token deployed",tokenkaaddress);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});