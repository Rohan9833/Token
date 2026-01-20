import { useEffect } from 'react';
const {ethers} = require("ethers");
// require('dotenv').config();
const artifact = require("./artifacts/contracts/Token.sol/Token.json");
// const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`);
const Contractaddress="0xb461fb82067eC8faa4AcC03CdaC2B0608ddd3f8e";
const abi = artifact.abi;

function App() {
  
  // useEffect(()=>{
  //   const writecontract = async()=>{
  //     const provider = new ethers.BrowserProvider.Web3Provider(window.etherum);
  //     await provider.send("eth_requestAccounts",[]);
  //     const signers = provider.getSigners();
  //     const contract = new ethers.Contract(Contractaddress,abi,signers);
  //     await contract.add(5,5);

  //   };
  //   writecontract();
  // },[]);

  const writecontract = async()=>{

    if (!window.ethereum) {
      alert("MetaMask nahi mila");
      return;
    }
      
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
    
      if (network.chainId !== 11155111n) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xaa36a7" }], // Sepolia
          });
        } catch (err) {
          alert("Please switch to Sepolia network in MetaMask");
          return;
        }
      }


      await provider.send("eth_requestAccounts",[]);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(Contractaddress,abi,signer);
      await contract.add(5,5);

    };


  return (
    <div className="App">
        <h2>Contract hai </h2>
        <button onClick={writecontract}>try it</button>
    </div>
  );
}

export default App;
