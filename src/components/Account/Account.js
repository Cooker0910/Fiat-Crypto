import './account.css';
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { getLogin, getSocialogin, userSignup } from '../../api';
import logo from '../../images/logo.png';

import { minMaxLength, validEmail} from './validator';

function Account()
{
    const [userEname, setUserEname] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const userdata = useLocation();
    let userID = userdata.search.split('?post=');
    if(userdata?.state?.details?.status == 'Registered') {
      setSuccessMsg('Registered');
    }
    userID = userID[1];

    let navigate = useNavigate(); 
    const routeChange = (url, data) =>{ 
      console.log(data)
        let path = url; 
        // navigate({pathname: path, state: data, search: `?post=${data?.details?._id}`});
        if (userID === undefined) {
          navigate({pathname: path, state: data});  
        } else {
          navigate({pathname: path, state: data, search: `?post=${data}`});
        }
    }

    const login = async () => {

      const validEMail = validEmail(userEname);
      const validLen = minMaxLength(userEname, 1)
      const validPwdLen = minMaxLength(password, 1)

      console.log('validEMail---', validEMail);
      if (validLen && validPwdLen) {
        setMsg('Please fill required fields');
      }
      else if (validEMail) {
        const requestOptions = {
          body: JSON.stringify({
            username: userEname,
            password: password,
          })
        };

        const getData = await getLogin(requestOptions);
        console.log('getData', getData);
        userID = getData.details._id;
        
        if (getData?.success === 'success') routeChange('/dashboard', userID); 
            setMsg('Invalid EamilId or Password');
      } else {
        setMsg('Invalid EmailId');
      }
    }

    const responseFacebook = async (response) => {
        if (response.status !== "unknown") {
          console.log('FB', response);
          const requestOptions = {
            body: JSON.stringify({
              name: response.name,
              username: response.username,
              email: response.email,
              password: '12345',
              logintype: 'Facebook'
            })
          };
            const result = await getSocialogin(requestOptions);
            if (result?.success == 'success') {
              userID = result.details[0]._id;
              routeChange('/dashboard', result.details[0]._id);
            } else {
              setMsg('Something went wrong');
            }
        }
    }
    
    const responseGoogle =async (response) => {
      console.log('Google==', response);
        if (!response.error) {
          const requestOptions = {
            body: JSON.stringify({
              name: response.profileObj.name,
              username: response.profileObj.name,
              email: response.profileObj.email,
              password: '12345',
              logintype: 'Gmail'
            })
          };
            const result = await getSocialogin(requestOptions);
            if (result?.success == 'success') {
              userID = result.details[0]._id;
              console.log();
              routeChange('/dashboard', userID);
            } else {
              setMsg(result.error);
            }
        }
    }

    return (
      <section className="">
        <div className='container-login'>
          <div className="row">
            <div className="col-md-12 col-sm-6">
                <div className='container-login' id="container_demo" >
                  <a class="hiddenanchor" id="toregister"></a>
                  <a class="hiddenanchor" id="tologin"></a>
                  <div id="wrapper">
                    <div id="login" class="animate form">
                      <img src={ logo } width="130" height="100%" alt="Logo" />
                      <form  action="" className='col-md-6 offset-md-3' autocomplete="on"> 
                        <h1>Log in</h1>
                        <h3 className='error-msg form-label fs-5'>{msg ? msg : '' }</h3>
                        <h3 className='success-msg form-label fs-5'>{successMsg ? successMsg : '' }</h3>
                        <p> 
                          <label class="uname"> Your email </label>
                          <input
                            id="username"
                            name="username"
                            value={userEname} 
                            onChange={(e)=> setUserEname(e.target.value)}
                            className='form-control' 
                            required="required"
                            type="text"
                            placeholder="mymail@mail.com"/>
                        </p>
                        <p> 
                          <label for="password" class="youpasswd"> Your password </label>
                          <input
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className='form-control'
                            required="required"
                            type="password"
                            placeholder="xxxxx"
                            /> 
                        </p>
                        <p class="keeplogin"> 
                          <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
                          <label for="loginkeeping">Keep me logged in</label>
                        </p>
                        <p class="login button"> 
                          <input type="button"  onClick={() =>login()} value="Login" /> 
                        </p>
                        <p class="change_link">
                          Not a member yet ?
                          <a onClick={()=> routeChange('/signup')} class="to_register pointer">Join us</a>
                        </p>
                      </form>
                      <hr />
                      <div className="row">
                        <div className="col-md-3 col-sm-6 offset-md-3">
                          <FacebookLogin appId="444022854132394" autoLoad={false} fields="name,email,picture" callback={responseFacebook} 
                          cssClass="kep-login-facebook[4]" icon="fa-facebook-square" />
                        </div>
                        <div className="col-md-3">
                          <GoogleLogin
                              clientId="308643233981-meuh47926i4dioobe2tffvccmqtotkg6.apps.googleusercontent.com"
                              buttonText="Login WIth Google"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
                {/*<div className="mb-3">
                  <label className="form-label fs-5">E-mail <span className='error-msg'>*</span></label>
                  <input
                    type="email" 
                    className="form-control p-3" 
                    value={userEname} 
                    onChange={(e)=> setUserEname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-5">Password <span className='error-msg'>*</span></label>
                  <input
                    type="password"
                    className="form-control p-3"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <button type="button" className="btn btn-warning btn-lg me-3" onClick={() =>login()}>Login</button>
                <button type="button" className="btn btn-success btn-lg" onClick={()=> routeChange('/signup')}>Register</button>
              </form>
            </div>
          </div>
        </div>
        <div className='container'>
          <hr />
          <div className="row">
            <div className="col-md-3 col-sm-6 offset-md-2">
              <FacebookLogin appId="444022854132394" autoLoad={false} fields="name,email,picture" callback={responseFacebook} 
              cssClass="my-facebook-button-class" icon="fa-facebook-square" />
            </div>
            <div className="col-md-3">
              <GoogleLogin
                  clientId="308643233981-meuh47926i4dioobe2tffvccmqtotkg6.apps.googleusercontent.com"
                  buttonText="Login WIth Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div> */}

      </section>
    );
}

export default Account;