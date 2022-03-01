import './account.css';
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { getLogin } from '../../api';
import logo from '../../images/logo.png';


function Kyc() {
  
  const userDetails = {};

  return (
    <section className='welcome'>
      <div className="container bootstrap snippet">
        <div className="row"> <div className="col-sm-10"><h1>Kyc Details</h1></div></div>
        <div className="row"> <div className="col-sm-9">
          <div className="tab-pane active"> <hr />
            <form className="form" id="registrationForm">
              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>Document name</h4></label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                    value={userDetails?.name}
                    placeholder="first name"
                    title="enter your first name if any."
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>Documnet Type</h4></label>
                  <input type="text" className="form-control" name="last_name" id="last_name" value={userDetails?.lname} placeholder="last name" title="enter your last name if any." />
                </div>
              </div>
        
              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>Upload</h4></label>
                  <input type="text" className="form-control" name="mobile" id="mobile" value={userDetails?.phone} placeholder="enter phone" title="enter your phone number if any." />
                </div>
              </div>

              <div className="form-group">
                <p class="signin button"> 
                  <input type="button" className="col-md-3" value="Update"/> 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>  
    </section>
  );

}


export default Kyc;