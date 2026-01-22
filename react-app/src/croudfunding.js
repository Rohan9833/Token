import { ethers } from "ethers";
import { useState, useEffect } from "react";
const artifact = require("./artifacts/contracts/croudfunding.sol/Crowd_Funding.json");
const Contractaddress = "0x66dd7BeAe05afA5393e320dc6082FBEa19277449";
const abi = artifact.abi;
function Writing(){
    const [contract, setContract] = useState(null);
    const[Total_ETH , setTotal_ETH] = useState(null);
    const main = async()=>{
        const provider = new ethers.BrowserProvider(window.ethereum);
        // const network = await provider.getNetwork();

        await provider.send("eth_requestAccounts",[]);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(Contractaddress,abi,signer);
        setContract(contractInstance);           
    }

    useEffect(() => {
        main();
    }, []);

    async function totaldonation() {
        const aa =  await contract.Total_ETH();
        setTotal_ETH(aa);
    }

    async function deposits() {
        await contract.deposit({value: ethers.parseEther("0.01") });
    }

    async function withdraw() {
        await contract.withdraw();
    }

    return(
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 20px'
            }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ 
                fontSize: '3rem', 
                margin: '0', 
                background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
                }}>
                Crowdfunding DApp
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '10px' }}>
                Support decentralization with every donation
                </p>
            </div>

            {/* Main Card */}
            <div style={{
                backgroundColor: '#1e293b',
                padding: '30px',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                width: '100%',
                maxWidth: '400px',
                border: '1px solid #334155'
            }}>
                
                {/* Display Box */}
                <div style={{
                backgroundColor: '#0f172a',
                padding: '20px',
                borderRadius: '16px',
                textAlign: 'center',
                marginBottom: '25px',
                border: '1px solid #1e40af33'
                }}>
                <p style={{ fontSize: '0.75rem', color: '#60a5fa', letterSpacing: '2px', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                    TOTAL RAISED
                </p>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    {Total_ETH ? ethers.formatEther(Total_ETH) : "0"} ETH
                </div>
                </div>

                {/* Input Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {/* <input 
                    type="number" 
                    placeholder="Enter Amount (ETH)" 
                    style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #475569',
                    backgroundColor: '#0f172a',
                    color: 'white',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                    }}
                /> */}

                <button onClick={deposits} style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '15px',
                    borderRadius: '12px',
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.4)'
                }}>
                    Donate Now
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button onClick={totaldonation} style={{
                    backgroundColor: '#334155',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer'
                    }}>
                    Total Donation
                    </button>
                    <button onClick={withdraw} style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    color: '#f87171',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    cursor: 'pointer'
                    }}>
                    Withdraw
                    </button>
                </div>
                </div>

                {/* Footer Status */}
                <div style={{
                marginTop: '25px',
                paddingTop: '20px',
                borderTop: '1px solid #334155',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.7rem',
                color: '#64748b'
                }}>
                <span>FA506NC System</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%' }}></div>
                    Connected
                </span>
                </div>
            </div>
        </div>
    );

}


export default Writing;
