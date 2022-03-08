import { useState } from 'react';
import Web3 from 'web3';
import './staking.css';
import Duration from '../Modules/Duration';
import Amount from '../Modules/Amount';
import durations from '../utils/duration';
import stakeAmount from '../utils/stakeAmount';
import abi from '../utils/abi.json';
import testAbi from '../utils/testAbi.json';
import stakingAbi from '../utils/stakingAbi.json';

const Stake = () => {

  const [walletAddress, setWalletAddress] = useState('');
  const [myAddress, setMyaddress] = useState('');
  const [myBalance, setMyBalance] = useState(0);
  const [realBalance, setRealBalance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [amount, setAmount] = useState(0);
  const [walletStatus, setWalletStatue] = useState(false);
  const [stakingAmount, setStakingAmount] = useState(0);
  const [approveStatus, setApproveStatus] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);

  const borderStyle = ["flex", "bronze", "silver", "gold"]
  const borderStyle1 = ["flex", "bronze", "gold"]
  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
  const testBusdAddress = '0x7C1987977227fa66B072C3d9814E4082601637e4';
  const stakingAddress = '0xe5a9f560bD0964602a4522E62C5827bB8d2424b0';
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(testAbi, testBusdAddress);
  const stakeContract = new web3.eth.Contract(stakingAbi, stakingAddress);

  const changeType = (idx) => {
    setDuration(idx);
  }
  const changeAmount = (idx) => {
    setAmount(idx);
    console.log(typeof idx)
    if(idx === 1) {
      setMinValue(2001);
      setMaxValue(5000)
    } else if(idx === 2) {
      setMinValue(5001)
      setMaxValue(10000);
    } else {
      setMinValue(0);
      setMaxValue(2000);
    }
  }
  const connectWallet = async() => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          try {
            // check if the chain to connect to is installed
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
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
                      chainId: '0x61',
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
          const balance = await contract.methods.balanceOf(accounts[0]).call();
          const address = accounts[0].slice(0, 5) + '...'+ accounts[0].slice(-4, accounts[0].length)
          setMyaddress(accounts[0]);
          setWalletAddress(address);
          setMyBalance(balance/1000000000000000000);
          setRealBalance(balance);
          setWalletStatue(true);
          console.log(balance);
        }
      } catch (e) {
        return false;
      }
    }
  }

  const staking = async() => {
    console.log(stakingAmount, minValue, maxValue)
    if (stakingAmount < minValue || stakingAmount > maxValue) {
      alert(`You can staking between ${minValue} and ${maxValue}`);
      return
    }
    if(!approveStatus) {
      alert('Please approve fist to staking');
      return;
    }
    if(stakingAmount === 0) {
      alert('Staking balance is empty');
      return;
    }
    if (myBalance > stakingAmount) {
      console.log(stakingAmount);
      await stakeContract.methods.staking(web3.utils.toWei(parseFloat(stakingAmount).toString(), "ether"))
      .send({from: myAddress})
      .then(function(res) {
        console.log(res);
      });
    }
  }

  const approve = async() => {
    console.log(myAddress, stakingAmount);
    await contract.methods
      .approve('0xe5a9f560bD0964602a4522E62C5827bB8d2424b0', realBalance)
      .send({from: myAddress})
      .then(function(res) {
        console.log('approved', res);
        staking();
        setApproveStatus(true);
    })
  }

  // const init = () => {
  //   setStakingAmount(0);
  //   connectWallet()
  // }
  // init();
  
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
              <input 
                type="number" 
                name='amount' 
                id="amount" 
                placeholder='Enter Amount'  
                autoComplete='off' 
                min={minValue}
                max={maxValue}
                onChange={(e) => setStakingAmount(e.target.value)} />
            </div>
          </div>
          <div className='annual'>
            <span>Your annual interest will be </span><span>12 %</span>
          </div>
          <div className='wrap-btn'>
            <button type='button' onClick={approve}>Approve</button>
            <button type='button' onClick={staking}>Stake</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stake;