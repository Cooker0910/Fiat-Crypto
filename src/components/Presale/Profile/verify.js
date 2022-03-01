import './profile.css';
// import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import logo from '../../../images/logo.png';

function Verify() {
  const userdata = useLocation();
  const userDetails = userdata.state;

  return ( 
    <section className='welcome'>
      <div className='container container-login'>
        <img src={ logo } width="130" height="100%" alt="Logo" />
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-5 mt-5">
            <div id="wrapper">
              <div className="block text-center">
                <h1 className="py-5 fw-bold">Email verified </h1>
                <div className="py-2 fw-bold">
                  <a href="http://dgtlz.finance/login" target='_blank'>
                    <h4 className='text-blue'>Click to Login DGTLZ Finance</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Verify;