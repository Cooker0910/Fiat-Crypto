import { useState } from 'react';
import './staking.css';
import Duration from '../Modules/Duration';
import Amount from '../Modules/Amount';
import durations from '../utils/duration';
import amounts from '../utils/amount';

const Invest = () => {

  const [duration, setDuration] = useState(-1);
  const [amount, setAmount] = useState(-1);

  const borderStyle = ["flex", "bronze", "silver", "gold"]
  const borderStyle1 = ["flex", "bronze", "gold"]

  const changeType = (idx) => {
    setDuration(idx);
  }
  const changeAmount = (idx) => {
    setAmount(idx);
  }

  return (
    <div className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="sectionTitle text-center">
              <div className="secNumber">
                <h3 className="bigNum fw-bold"> INVESTMENT PLANS</h3>
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
                interest={items.intersts}
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
            { amounts.map((items, idx) => {
              return <Amount 
                key={idx}
                id={idx}
                amount={items.amount}
                onChangeType={changeAmount}
                checkout={idx === amount ? true : false}
                border={borderStyle1[idx]}
              />
            })}
          </div>
        </div>
        <div className='annual'>
          <span>Your annual interest will be </span><span>12 %</span>
        </div>
        <div className='wrap-btn'>
          <button>Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default Invest;