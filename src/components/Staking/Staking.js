import { useState } from 'react';
import Web3 from 'web3';
import './staking.css';
import Duration from '../Modules/Duration';
import Amount from '../Modules/Amount';
import durations from '../utils/duration';
import stakeAmount from '../utils/stakeAmount';
import abi from '../utils/abi.json';

const Stake = () => {

  const [walletAddress, setWalletAddress] = useState('');
  const [myBalance, setMyBalance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [amount, setAmount] = useState(0);
  const [walletStatus, setWalletStatue] = useState(false)

  const borderStyle = ["flex", "bronze", "silver", "gold"]
  const borderStyle1 = ["flex", "bronze", "gold"]
  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

  const changeType = (idx) => {
    setDuration(idx);
  }
  const changeAmount = (idx) => {
    setAmount(idx);
  }
  const connectWallet = async() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          console.log('sfasdfasd')
          try {
            // check if the chain to connect to is installed
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
            });
          } catch (error) {
            // This error code indicates that the chain has not been added to MetaMask
            // if it is not, then install it into the user MetaMask
            if (error.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: '0x38',
                      rpcUrl: 'https://bsc-dataseed1.defibit.io/',
                    },
                  ],
                });
              } catch (addError) {
                console.error(addError);
              }
            }
            console.error(error);
          }
        
          const accounts =  await web3.eth.getAccounts();
          const contract = new web3.eth.Contract(abi, busdAddress);
          const balance = await contract.methods.balanceOf(accounts[0]).call();
          const address = accounts[0].slice(0, 5) + '...'+ accounts[0].slice(-4, accounts[0].length)
          setWalletAddress(address);
          setMyBalance(balance/1000000000000000000);
          setWalletStatue(true)
        }
      } catch (e) {
        return false;
      }
    }
  }

  return (
    <>
      <div className='wallet'>
        { walletStatus ? 
          <>
            <div className='walletInfo'>
            <h6>Wallet</h6>
            <div>
              <h6>{walletAddress}</h6>
            </div>
            </div>
            <div className='walletInfo'>
              <h6>BSC</h6>
              <div style={{background: 'aquamarine'}}>
                <h6>Connected</h6>
              </div>
            </div>
            <div className='walletInfo'>
              <h6>Balance</h6>
              <div>
                <h6>{myBalance}BUSD</h6>
              </div>
            </div>
          </>
        :
        <button className='connectBtn' onClick={connectWallet}>Click Connect your Wallet</button>
        }
      </div>
      <div className="pricing py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="sectionTitle text-center">
                <div className="secNumber">
                  <h3 className="bigNum fw-bold"> STAKING PLANS</h3>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>

          <p>Select Duration</p>
          <div className="row mt-5 mb-5">
            <div className="css1">
              { durations.map((items, idx) => {
                return <Duration 
                  key={idx}
                  id={idx}
                  type={items.type}
                  month={items.month}
                  onChangeType={changeType}
                  checkout={idx === duration ? true : false}
                  border={borderStyle[idx]}
                />
              }) }
            </div>
          </div>
          <p>Select Amount</p>
          <div className="row mt-5">
            <div className="css1">
              { stakeAmount.map((items, idx) => {
                return <Amount 
                  key={idx}
                  id={idx}
                  dgtlz={items.dgtlz}
                  busd={items.busd}
                  onChangeType={changeAmount}
                  checkout={idx === amount ? true : false}
                  border={borderStyle1[idx]}
                />
              })}
            </div>
          </div>
          <div className='row mt-5'>
            <p>Enter amount of token to Stake</p>
            <div id='amountDiv'>
              <input type="number" name='amount' id="amount" placeholder='Enter Amount' autoComplete='off' />
            </div>
          </div>
          <div className='annual'>
            <span>Your annual interest will be </span><span>12 %</span>
          </div>
          <div className='wrap-btn'>
            <button>Stake</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stake;