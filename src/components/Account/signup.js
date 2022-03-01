import './account.css';
import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { config } from '../../config.js';
import { userSignup, getSocialogin } from '../../api';
import { minMaxLength, validEmail} from './validator';
import logo from '../../images/logo.png';


function Register()
{
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [emailid, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [msg, setMsg] = useState('');

  const userdata = useLocation();
  let userID = userdata.search.split('?post=');
  userID = userID[1];

  let navigate = useNavigate(); 
  const routeChange = (url, data) =>{ 
    let path = url;
    if (userID === undefined) {
      navigate({pathname: path, state: data});
    } else {
      navigate({pathname: path, state: data, search: `?post=${data?.details?._id}`});
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
          routeChange('/dashboard', result.details[0]);
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
            userID = result.details._id;
            routeChange('/dashboard', result);
          } else {
            setMsg(result.error);
          }
      }
  }


  const signup = async () => 
  {
    const validEmailid  = validEmail(emailid);
    const validUsername = minMaxLength(username, 1);
    const validName     = minMaxLength(name, 1);
    const validPassword = minMaxLength(password, 1);

    if (validName) {
      setMsg('Please enter vaild Name');
      return;
    } else if (validUsername) {
      setMsg('Please enter valid User Name');
      return;
    } else if (!validEmailid) {
      setMsg('Please enter valid Email Id');
      return;
    } else if (validPassword) {
      setMsg('Please enter valid Password');
      return;
    } else if (password != cpassword) {
      setMsg('Password and confirm password not match');
      return;
    }
    
    const requestOptions = {
      body: JSON.stringify({
        name: name,
        username: username,
        email: emailid,
        password: password,
        confirmPassword: cpassword,
        logintype: 'web'
      })
    };

    const response = await userSignup(requestOptions);
    console.log('response', response);

    if (response?.success == 'success') {
        userID = response.details;
        const postdata = {
          details : {
            _id: response.details,
            status: 'Registered'
          }
        };
        console.log('postdata', postdata);
        setName('');
        setUserName('');
        setEmailId('');
        setPassword('');
        setCpassword('');
        routeChange('/login', postdata);
    } else {
      setMsg(response?.errors?.invalidCredentials);
    }

    // fetch(`${config.apiurl}/users/signup`, requestOptions)
    // .then(response => response.json())
    // .then(data => {
    //   console.log('success', data);
    //   if (data?.success === 'success') {
    //     userID = data.details;
    //     const postdata = {
    //       details : {
    //         _id: data.details,
    //         status: 'Registered'
    //       }
    //     };
    //     console.log('postdata', postdata);
    //     setName('');
    //     setUserName('');
    //     setEmailId('');
    //     setPassword('');
    //     setCpassword('');
    //     routeChange('/login', postdata);
    //   } else {
    //     setMsg('Something Went Wrong');
    //   }
    // });
  }

return (
  <section>
      <div className="row">
        <div className="col-md-12 col-sm-6">
        <div id="wrapper">
          <div id="login" className="animate form">
            <img src={ logo } width="130" height="100%" alt="Logo" />
            <form> 
              <h1 className="offset-md-3"> Sign up </h1> 
              <p> 
                <h3 className='error-msg form-label fs-5'>{msg ? msg : '' }</h3>
                <label className="uname" data-icon="u">Your name</label>
                <input
                  id="namesignup"
                  className='form-control'
                  name="namesignup"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  required="required"
                  type="text"
                  placeholder="myname"
                />
              </p>
              <p> 
                <label className="uname" data-icon="u">Your username</label>
                <input
                  id="usernamesignup"
                  className='form-control'
                  name="usernamesignup"
                  value={username}
                  onChange={(e)=> setUserName(e.target.value)}
                  required="required"
                  type="text"
                  placeholder="username"
                />
              </p>
              <p> 
                <label className="youmail" data-icon="e" > Your email</label>
                <input
                  id="emailsignup"
                  name="emailsignup"
                  className='form-control'
                  value={emailid}
                  onChange={(e)=> setEmailId(e.target.value)}
                  required="required"
                  type="email"
                  placeholder="mysupermail@mail.com"
                /> 
              </p>
              <p> 
                <label className="youpasswd" data-icon="p">Your password </label>
                <input
                  id="passwordsignup"
                  name="passwordsignup"
                  className='form-control'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  required="required"
                  type="password"
                  placeholder=""
                />
              </p>
              <p> 
                <label className="youpasswd" data-icon="p">Please confirm your password </label>
                <input
                  id="passwordsignup_confirm"
                  className='form-control'
                  name="passwordsignup_confirm"
                  value={cpassword}
                  onChange={(e)=> setCpassword(e.target.value)}
                  required="required"
                  type="password"
                  placeholder=""
                />
              </p>
              <p class="signin button"> 
                <input type="button" onClick={() =>signup()} value="Sign up"/> 
              </p>
              <p class="change_link">  
                Already a member ?
                <a onClick={()=> routeChange('/login')} className="to_register pointer"> Go and log in </a>
              </p>
            </form>
            <hr />
            <div className="row">
              <div className="col-md-3 col-sm-6 offset-md-2">
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
        
          {/* <form method='post' action=''>
          <h3 className='error-msg form-label fs-5'>{msg ? msg : '' }</h3>
              <div className="mb-3">
                  <label className="form-label fs-5">Name</label>
                  <input type="text" className="form-control p-3" value={name} onChange={(e)=> setName(e.target.value)} />
              </div>
              <div className="mb-3">
                  <label className="form-label fs-5">Username</label>
                  <input type="text" className="form-control p-3" value={username} onChange={(e)=> setUserName(e.target.value)} />
              </div>
              <div className="mb-3">
                  <label className="form-label fs-5">Email</label>
                  <input type="email" className="form-control p-3" value={emailid} onChange={(e)=> setEmailId(e.target.value)} />
              </div>
              <div className="mb-3">
                  <label className="form-label fs-5">Password</label>
                  <input type="password" className="form-control p-3" value={password} onChange={(e)=> setPassword(e.target.value)} />
              </div>
              <div className="mb-3">
                  <label className="form-label fs-5">Confirm Password</label>
                  <input type="password" className="form-control p-3" value={cpassword} onChange={(e)=> setCpassword(e.target.value)} />
              </div>
              <button type="button" className="btn btn-success btn-lg" onClick={() =>signup()}>Save</button>
            </form> */}
        </div>
      </div>
      <hr />
      {/* <div className="row">
        <div className="col-md-3 offset-md-2">
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
      </div> */}
</section>
)
}

export default Register;