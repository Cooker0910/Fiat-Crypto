import './banner.css';
import dollar from '../../../images/neve-dollar-1.png';
import clock from '../../../images/neve-clock-1.png';
import smile from '../../../images/neve-smile-1.png';
import { useNavigate } from "react-router-dom";

function Banner() {
    let linkpass = {
        link: '#',
    }

    let navigate = useNavigate(); 
    const routeChange = (url, data) =>{ 
        let path = url; 
        navigate(path, {state: data});
    }
    
    return ( 
        <div className="banner hasBgShadow">
            <div className="container mt-4">
                <div className="row">
                    <h1 className="fs-b text-center animate__animated animate__fadeInDown animate__delay-1s">Cryptos passive income. <span className='fw-bold'>Up to 34%. Easy. Legal.</span></h1>
                    <div className="col-md-8 offset-md-2">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="mt-5 fs-5 animate__animated animate__fadeInUp text-center">Smart risk management. Legal contract. From bank account to bank account. Registered Company</p>
                            </div>
                            {/* <div className="col-md-6">                                
                                <p className="mt-5 fs-5 text-end animate__animated animate__fadeInUp">Smart risk management</p>
                                <p className="mt-5 fs-5 text-end animate__animated animate__fadeInUp">Legal contract</p>
                            </div>
                            <div className="col-md-6">
                                <p className="mt-5 fs-5 animate__animated animate__fadeInUp">From bank account to bank account</p>
                                <p className="mt-5 fs-5 animate__animated animate__fadeInUp">Registered Company</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 animate__animated animate__fadeInLeft mt-5">
                            <a onClick={()=> routeChange('/signup')} className="btn btn-primary btn-lg text-uppercase">Create an Account</a> <br />
                            <img src={ dollar} alt="" className="img-fluid mt-5 spinImage" />
                            <p className="mt-5 fs-5">HIGH ROI, UP TO 34% YEARLY GUARANTEED</p>
                        </div>
                        <div className="col-md-4 animate__animated animate__fadeInUp mt-5">
                            <a href={ linkpass.link } className="btn btn-danger btn-lg text-uppercase">Participate in our Pre-sale</a> <br />
                            <img src={ clock} alt="" className="img-fluid mt-5 spinImage" />
                            <p className="mt-5 fs-5">SAFETY FIRST, INSURED AND AUDITED PROTOCOLS</p>
                        </div>
                        <div className="col-md-4 animate__animated animate__fadeInRight mt-5">
                            <a href={ linkpass.link } className="btn btn-primary btn-lg text-uppercase">Connect your wallet</a> <br />
                            <img src={smile} alt="" className="img-fluid mt-5 spinImage" />
                            <p className="mt-5 fs-5">CONTRACT LEGAL IN EVERY COUNTRY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Banner;