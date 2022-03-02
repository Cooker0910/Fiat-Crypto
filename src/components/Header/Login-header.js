import './header.css';
import logo from '../../images/logo.png';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { cleaarUser } from '../../api';


function LoginHeader()
{
  const userdata = useLocation();
  let userID = userdata.search.split('?post=');
  userID = userID[1];


  let navigate = useNavigate(); 
  const routeChange = (url, data) =>{ 
    console.log('-------------',url, '\n', data, '-----')
    let path = url; 
    if (userID === undefined) {
      navigate({pathname: path, state: data});  
    } else {
      navigate({pathname: path, state: data, search: `?post=${userID}`});
    }
  }

  const logout = ()=> {
    cleaarUser();
    localStorage.setItem('isLogin', false);
    userID = undefined;
    window.location.href = '/';
    // routeChange('/');
  }
    
  return (
  <>
    <div className="loader-wrapper">
      <div className="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>

    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={ logo }
            width="130"
            height="100%"
            alt="Logo"
          />
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
                <a className="nav-link fw-bold fs-5 pointer" onClick={()=> routeChange('/dashboard')}>Dashboard |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fs-5 pointer" onClick={()=> routeChange('/profile')}>Profile |</a>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link fw-bold fs-5 pointer" data-bs-toggle="dropdown" role="button" aria-expanded="false">My Investment |</a>
                  <ul className='dropdown-menu'>
                    <li><a className='dropdown-item' onClick={()=> routeChange('/invest')}>Invest</a></li>
                    <li><a className='dropdown-item' onClick={()=> routeChange('/stake')}>Stake</a></li>
                  </ul>
              </li>
              <li className="nav-item">
                  <a className="nav-link fw-bold fs-5 pointer" onClick={()=> routeChange('/supportcenter')}>My Support Center |</a>
              </li>
              <li className="nav-item">
              <a className="nav-link fw-bold fs-5 pointer" onClick={()=> logout('/')}>Logout</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  </>
  );
}
export default LoginHeader;