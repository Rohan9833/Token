import { useState,useEffect } from "react";
const {ethers} = require("ethers");
const artifact = require("./artifacts/contracts/Token.sol/Token.json");
// const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`);
const Contractaddress="0xb461fb82067eC8faa4AcC03CdaC2B0608ddd3f8e";
const abi = artifact.abi;

function App() {
  const [contract,setContract] = useState(null);
  const [reciver ,setReciver] = useState("");
  const [amount ,setAmount]= useState("");
  const[balchecker ,setBalchecker]= useState("");
  const [bal ,setBal]= useState(null);
  // 0x0000000000000000000000000000000000000000

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
      setContract(contract);
      

    };

    useEffect(()=>{writecontract()},[]);

    async function details() {
      contract.transfer(reciver , amount);
    }

    async function Balance() {
      let totalbal = contract.balancecheck(balchecker);
      setBal(totalbal);

    }



  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: 'white'
    }}>
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        backdropFilter: 'blur(15px)', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '24px', 
        padding: '40px', 
        width: '100%', 
        maxWidth: '450px', 
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ margin: 0, fontSize: '28px', background: 'linear-gradient(to right, #00dbde, #fc00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
            Hardhat Token
          </h1>
          <p style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>Symbol: $ROH | Supply: 100</p>
        </div>

        {/* Balance Card */}
        <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '20px', borderRadius: '18px', textAlign: 'center', marginBottom: '30px', border: '1px solid rgba(0, 219, 222, 0.3)' }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#00dbde', display: 'block', marginBottom: '10px' }}>
            Check Account Balance
          </span>
          
          
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            <input 
            onChange={(e)=>setBalchecker(e.target.value)}
              type="text" 
              placeholder="Enter Wallet Address (0x...)" 
              style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: 'rgba(0,0,0,0.3)', color: 'white', fontSize: '12px', outline: 'none' }} 
            />
            <button
            onClick={Balance}
            style={{ background: '#00dbde', border: 'none', color: '#0f0c29', padding: '0 15px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
              Check
            </button>
          </div>

          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <img 
              src="final.png" 
              alt="coin" 
              style={{ width: '100px', height: '100px', filter: 'drop-shadow(0 0 8px #00dbde)' }} 
            />
            <h2 style={{ fontSize: '32px', margin: '0', color: '#fff', fontWeight: '600' }}>
              {bal} <span style={{ fontSize: '16px', color: '#aaa', fontWeight: '400' }}>ROH</span>
            </h2>
          </div>
        </div>

        {/* Transfer Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '12px', marginLeft: '5px', color: '#bbb' }}>Recipient Address</label>
            <input 
              onChange={(e)=>setReciver(e.target.value)}
              type="text" 
              placeholder="0x71C...890" 
              style={{ width: '100%', padding: '14px', marginTop: '5px', borderRadius: '12px', border: 'none', background: 'rgba(0,0,0,0.2)', color: 'white', boxSizing: 'border-box', outline: 'none' }} 
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '12px', marginLeft: '5px', color: '#bbb' }}>Amount to Send</label>
            <input 
              onChange={(e)=>setAmount(e.target.value)}
              type="number" 
              placeholder="0.00" 
              style={{ width: '100%', padding: '14px', marginTop: '5px', borderRadius: '12px', border: 'none', background: 'rgba(0,0,0,0.2)', color: 'white', boxSizing: 'border-box', outline: 'none' }} 
            />
          </div>

          <button
          onClick={details}
          style={{ 
            width: '100%', 
            padding: '16px', 
            marginTop: '10px', 
            borderRadius: '12px', 
            border: 'none', 
            background: 'linear-gradient(to right, #00dbde, #fc00ff)', 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '16px', 
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 219, 222, 0.3)'
          }}>
            Transfer Tokens
          </button>
        </div>

        {/* Footer Detail */}
        <div style={{ marginTop: '25px', textAlign: 'center', opacity: '0.5' }}>
          <p style={{ fontSize: '11px' }}>Connected to Ethereum Mainnet</p>
        </div>
      </div>
    </div>
  );
}

export default App;
