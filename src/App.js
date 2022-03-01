import './App.css';
import {useLocation} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Presale from "./components/Presale/Presale";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Home from './components/Home/Home';
import Profile from './components/Presale/Profile/profile';
import Account from './components/Account/Account';
import Kyc from './components/Account/kyc';
import Register from './components/Account/signup';
import Verify from './components/Presale/Profile/verify';
import Dashboard from './components/Dashboard/dashboard';
import Plan from './components/Dashboard/Plan';

import 'dotenv/config';

function App() {
  const userdata = useLocation();

  return (
    <div className="App">
      {
        userdata.pathname == '/signup' ?
        <Routes>
          <Route path="/signup" element={<Register />} />
        </Routes>
      : 
        userdata.pathname == '/login' ?
          <Routes>
            <Route path="/login" element={<Account />} />
          </Routes>
      : 
        userdata.pathname == '/verify' ?
        <Routes>
          <Route path="/verify" element={<Verify />} />
        </Routes>
      :
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presale" element={<Presale />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/kyc" element={<Kyc />} />
          </Routes>
          <Footer />
          <Popup />
        </>
      }
    </div>
  );
}

export default App;
