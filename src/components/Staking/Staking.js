import { useState } from 'react';
import './staking.css';
import bg from '../../images/selected-green.png';
import Duration from '../Modules/Duration';
import durations from '../utils/duration';

const Stake = () => {

  const [duration, setDuration] = useState(-1);
  const [amount, setAmount] = useState(0);

  const borderStyle = ["flex", "bronze", "silver", "gold"]

  const changeType = (idx) => {
    setDuration(idx);
  }

  const setBackground = (id) => {
    if(amount === id) {
      return {
        background: `url(${bg}) right top / 30% no-repeat`
      }
    } else return {}
  };

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
                checkout={idx == duration ? true : false}
                border={borderStyle[idx]}
              />
            }) }
          </div>
        </div>
        <p>Select Amount</p>
        <div className="row mt-5">
          <div className="css1">
            <div className="col-md-3 css2">
              <div className="css3 flex" onClick={() => setAmount(5)} style={setBackground(5)}>
                <div className='css12'>
                  <div>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr><br></br>
                    <h5 className="css5"> 2 000$  </h5><br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 css2">
              <div className="css3 bronze" onClick={() => setAmount(6)} style={setBackground(6)}>
                <div className='css12'>
                  <div>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr><br></br>
                    <h5 className="css5"> 5 000$  </h5><br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 css2">
              <div className="css3 gold" onClick={() => setAmount(7)} style={setBackground(7)}>
                <div className='css12'>
                  <div>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr><br></br>
                    <h5 className="css5"> 10 000$  </h5><br></br>
                  </div>
                </div>
              </div>
            </div>
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

export default Stake;