import './header.css';
import logo from '../../images/logo.png';
import LoginHeader from './Login-header';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { isUserLogin } from '../../api';


function Header()
{
  const userdata = useLocation();

  console.log('userdata', userdata);
  let userDetails = userdata.state;
  let userID = userdata.search.split('?post=');
  userID = userID[1];

  let navigate = useNavigate();
  let isUser = false;

  const routeChange = (url, data) =>{ 
      let path = url; 
      // navigate(path, {state: data});
      console.log('userID', userID, url);
      if (userID == undefined) {
        navigate({pathname: path, state: data});  
      } else {
        navigate({pathname: path, state: data, search: `?post=${userID}`});
      }
  }


  useEffect(() => {
    console.log('{localStorage.getItem', userDetails);
    const isLogin = localStorage.getItem('isLogin');
    console.log('isUserLogin', typeof isLogin);

    if (isLogin === 'false') {
      userDetails = '';
      isUser = false;
    } else {
      isUser = true;
    }
  }, [])
    
    return (
      <>
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      { !userID ?
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={ logo } width="130" height="100%" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link fw-bold fs-5" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold fs-5" to="/signup">Account</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold fs-5" to="/presale">Presale</Link>
                </li>
              </ul>
              {
                userdata.pathname == '/login' ? '' :
                  <div className="d-flex">
                    <button
                      className="btn btn-outline-success btn-connect fw-bold fs-4"
                      onClick={()=> routeChange('/login')}
                    >
                      Sign In
                    </button>
                  </div>
              }
            </div>
          </div>
        </nav>
        :
        <LoginHeader />
      }
      <hr />
        </>

    );
}
export default Header;