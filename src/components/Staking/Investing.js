import { useState } from 'react';
import { createSearchParams } from 'react-router-dom';
import './staking.css';
import bg from '../../images/selected-green.png';

const Invest = () => {

  const [duration, setDuration] = useState(0);
  const [amount, setAmount] = useState(0);

  const setBackground = (id) => {
    if(duration === id || amount === id) {
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
            <div className="col-md-3 css2">
              <div className="css3 flex" onClick={() => setDuration(1)} style={setBackground(1)}>
                <div className='css12'>
                  <div>
                    <h5 className='css23'> FLEX </h5>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr><br></br>
                    <h6 className="css4">Unlock Duration</h6>
                    <h5 className="css5"> 1 Months  </h5><br></br>
                    <hr></hr><br></br>
                    <h6 className="css6">Intersts paid 2 tims</h6>
                    <hr></hr>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 css2">
              <div className="css3 bronze" onClick={() => setDuration(2)} style={setBackground(2)}>
                <div className='css12'>
                  <div>
                    <h5 className='css23'> BRONZE </h5>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr><br></br>
                    <h6 className="css4">Unlock Duration</h6>
                    <h5 className="css5"> 3 Months  </h5><br></br>
                    <hr></hr><br></br>
                    <h6 className="css6">Intersts paid 2 tims</h6>
                    <hr></hr>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 css2">
              <div className="css3 silver" onClick={() => setDuration(3)} style={setBackground(3)}>
                <div className='css12'>
                  <div>
                    <h5 className='css23'> SILVER </h5>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr><br></br>
                    <h6 className="css4">Unlock Duration</h6>
                    <h5 className="css5"> 6 Months  </h5><br></br>
                    <hr></hr><br></br>
                    <h6 className="css6">Intersts paid 3 tims</h6>
                    <hr></hr>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 css2">
              <div className="css3 gold" onClick={() => setDuration(4)} style={setBackground(4)}>
                <div className='css12'>
                  <div>
                    <h5 className='css23'> GOLD </h5>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr><br></br>
                    <h6 className="css4">Unlock Duration</h6>
                    <h5 className="css5"> 1 Year  </h5><br></br>
                    <hr></hr><br></br>
                    <h6 className="css6">Intersts paid 4 tims</h6>
                    <hr></hr>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
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

export default Invest;