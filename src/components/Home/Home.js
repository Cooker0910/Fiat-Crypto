import Banner from "./Banner/Banner";
import './home.css';
import envelope from '../../images/neve-envelope-1.png';
import map from '../../images/neve-map-1.png';
import photography from '../../images/neve-photography-1.png';
import phone from '../../images/neve-phone-1.png';
import perfection from '../../images/neve-ultimate-perfection-1.png';
import strict from '../../images/neve-strict-deadline1.png';
import smart from '../../images/neve-smart-experience1.png';
import reputed from '../../images/neve-reputed-copmany1.png';
import team1 from '../../images/nv-team1-4.jpg';
import team2 from '../../images/nv-team2-1.jpg';
import team3 from '../../images/nv-team3-1.jpg';
import team4 from '../../images/nv-team4-1.jpg';
import chartup from '../../images/neve-chart-up-1.png';
import user from '../../images/neve-user-1.png';
import heart from '../../images/neve-heart-1.png';
import gift from '../../images/neve-gift-1.png';
import relax from '../../images/nv-5.jpg';
import riskfree from '../../images/nv-4.jpg';
import support from '../../images/nv-6.jpg';

function Home()
{
    return (
        <>
            <Banner />
            <div className="safeTools">
                <div className="container">
                    <div className="row">
                        <p className="mt-5 fs-5 text-center mb-5">We selected the safest tools and investments to diversify and grow our portfolio. Safety is our priority.</p>

                        <div className="col-md-3 animate__animated animate__fadeInUp">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-danger border-4 p-5 rounded-3">
                                <img src={envelope} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Easy setup</h5>
                                <p className="fs-5">As simple as a Wire transfer, easy in and easy out, bank account to bank account</p>
                            </div>
                        </div>
                        <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-success border-4 p-5 rounded-3">
                                <img src={map} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Optimization</h5>
                                <p className="fs-5">Diversified investments and strategies in the digital currencies world, with the lowest risk level</p>
                            </div>
                        </div>
                        <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-dark border-4 p-5 rounded-3">
                                <img src={photography} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Benefits</h5>
                                <p className="fs-5">We offer high interests, up to 34% per year, on risk-free positions</p>
                            </div>
                        </div>
                        <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-3s">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-primary border-4 p-5 rounded-3">
                                <img src={phone} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Legality</h5>
                                <p className="fs-5">The contract that bends us makes from DGTLZ your debtor in a legal frame</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-warning border-4 p-5 rounded-3">
                                <img src={perfection} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Transparency</h5>
                                <p className="fs-5">Our identity is known and verified, we stand behind our project</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-info border-4 p-5 rounded-3">
                                <img src={strict} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Flexibility</h5>
                                <p className="fs-5">Your investment is always available, and can be withdrawn anytime</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-danger border-4 p-5 rounded-3">
                                <img src={smart} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Risk Management</h5>
                                <p className="fs-5">We do not trade, use derivates, or fancy tools. Traditional management in tomorrow's system</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="safeBlock mb-5 text-center bg-white border-bottom border-success border-4 p-5 rounded-3">
                                <img src={reputed} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4">Tax friendly</h5>
                                <p className="fs-5">No need to be worried anymore about tax filling, only 1 number to fill thanks to our protocol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="sectionTitle text-center">
                                <div className="secNumber">
                                    <h1 className="bigNum fw-bold">03</h1>
                                </div>
                                <h2 className="fw-bold my-4">The Team At Your Disposal</h2>
                                <p className="fs-5 text-secondary mb-5">Our team is here to assist you, make your investment safe and is proud to have their identity fully disclosed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="teamBlock text-center bg-white border-bottom border-danger border-4 p-3 rounded-3">
                                <img src={team1} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4 text-danger">Gregory Levakis</h5>
                                <p className="fs-5">Founder</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="teamBlock text-center bg-white border-bottom border-success border-4 p-3 rounded-3">
                                <img src={team2} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4 text-success">Jonas Pescado</h5>
                                <p className="fs-5">Founder & CTO</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="teamBlock text-center bg-white border-bottom border-info border-4 p-3 rounded-3">
                                <img src={team3} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4 text-info">Marvelous Marv</h5>
                                <p className="fs-5">Founder</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="teamBlock text-center bg-white border-bottom border-warning border-4 p-3 rounded-3">
                                <img src={team4} alt="" className="img-fluid" />
                                <h5 className="fw-bold my-4 text-warning">Snapdragon</h5>
                                <p className="fs-5">Community Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats mt-5">
                    <div className="container">
                        <div className="row py-5 text-center text-white">
                            <div className="col-md-3">
                                <div className="statBlock">
                                    <img src={chartup} alt="" className="img-fluid" />
                                    <p className="fs-5 mt-4">7+</p>
                                    <p className="fs-5">Years of experience in Crypto</p>
                                    <i className="far fa-dot-circle mt-4 fs-4 text-danger"></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="statBlock">
                                    <img src={user} alt="" className="img-fluid" />
                                    <p className="fs-5 mt-4">16+</p>
                                    <p className="fs-5">Satisfied Clients</p>
                                    <i className="far fa-dot-circle mt-4 fs-4 text-success"></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="statBlock">
                                    <img src={heart} alt="" className="img-fluid" />
                                    <p className="fs-5 mt-4">TRUST+</p>
                                    <p className="fs-5">In our Community</p>
                                    <i className="far fa-dot-circle mt-4 fs-4 text-primary"></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="statBlock">
                                    <img src={gift} alt="" className="img-fluid" />
                                    <p className="fs-5 mt-4">%%%+</p>
                                    <p className="fs-5">Many Bonuses Awarded</p>
                                    <i className="far fa-dot-circle mt-4 fs-4 text-warning"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="sectionTitle text-center">
                                <div className="secNumber">
                                    <h1 className="bigNum fw-bold">04</h1>
                                </div>
                                <h2 className="fw-bold my-4">DGTLZ In Detail</h2>
                                <p className="fs-5 text-secondary mb-5">What started as a word of mouth ended as a professional portfolio management. We started our adventure back in the early days of Bitcoin/Ethereum mining, with people investing in our farms, to eventually become a crypto assets management.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center my-5">
                        <div className="col-md-6">
                            <div className="detailBlock p-5 bg-white border-bottom border-danger border-4 rounded-3">
                                <div className="row">
                                    <div className="col-md-2">
                                        <h4 className="fw-bold mt-5">1</h4>
                                    </div>
                                    <div className="col-md-10">
                                        <h5 className="fw-bold my-4">Relax</h5>
                                        <p className="fs-5">We proceed with due diligence in the management of our assets, we will proceed identically with yours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={ relax} alt="" className="img-fluid rounded-3" />
                        </div>
                    </div>
                    <div className="row align-items-center my-5">
                        <div className="col-md-6 order-lg-2">
                            <div className="detailBlock p-5 bg-white border-bottom border-success border-4 rounded-3">
                                <div className="row">
                                    <div className="col-md-2">
                                        <h4 className="fw-bold mt-5">2</h4>
                                    </div>
                                    <div className="col-md-10">
                                        <h5 className="fw-bold my-4">Risk Free</h5>
                                        <p className="fs-5">While every investment can be considered as a risk, be it in Traditional or in Decentralized Finance, we aim htmlFor audited and insured protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={ riskfree} alt="" className="img-fluid rounded-3" />
                        </div>
                    </div>
                    <div className="row align-items-center my-5">
                        <div className="col-md-6">
                            <div className="detailBlock p-5 bg-white border-bottom border-warning border-4 rounded-3">
                                <div className="row">
                                    <div className="col-md-2">
                                        <h4 className="fw-bold mt-5">3</h4>
                                    </div>
                                    <div className="col-md-10">
                                        <h5 className="fw-bold my-4">Dedicated Support</h5>
                                        <p className="fs-5">Being in the "Internet of Finance" should not imply, like many, to be anonymous. We are fully disclosed and standing behind our Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={support} alt="" className="img-fluid rounded-3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="sectionTitle text-center">
                                <div className="secNumber">
                                    <h1 className="bigNum fw-bold">05</h1>
                                </div>
                                <h2 className="fw-bold my-4">Pricing Table</h2>
                                <p className="fs-5 text-secondary mb-5">Some text will go here related with this pricing table</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="pricingBlock text-center shadow bg-white p-4 border-top border-success border-4 rounded-3">
                                <h5 className="fw-bold my-5">The Newcomer</h5>
                                <button className="btn btn-success btn-round py-4">
                                    <span className="fs-5 fw-bold">$2.000</span> <br />
                                    <p className="pt-3 fs-5">3 <br /> Months Plan</p>
                                </button>

                                <p className="pt-5 fs-5"><span className="fw-bold">3%</span> Minimum Return</p>
                                <p className="fs-5"><span className="fw-bold">20$</span> Management Fees</p>
                                <p className="fs-5">Payment of interests at term</p>
                                <p className="fs-5">Secure Platform</p>
                                <p className="fs-5">24/7 Dedicated Customer Support</p>
                                <p className="fs-5 my-5">Withdrawable anytime</p>

                                <a href="javscript(void)" className="btn btn-success btn-lg text-uppercase">Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricingBlock text-center shadow bg-white p-4 border-top border-danger border-4 rounded-3">
                                <h5 className="fw-bold my-5">The Wise</h5>
                                <button className="btn btn-danger btn-round py-4">
                                    <span className="fs-5 fw-bold">$5.000</span> <br />
                                    <p className="pt-3 fs-5">4 <br /> Months Plan</p>
                                </button>

                                <p className="pt-5 fs-5"><span className="fw-bold">5%</span> Minimum Return</p>
                                <p className="fs-5"><span className="fw-bold">100$</span> Management Fees</p>
                                <p className="fs-5">Payment of interests at term</p>
                                <p className="fs-5">Secure Platform</p>
                                <p className="fs-5">24/7 Dedicated Customer Support</p>
                                <p className="fs-5 my-5">Withdrawable anytime</p>

                                <a href="javscript(void)" className="btn btn-danger btn-lg text-uppercase">Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricingBlock text-center shadow bg-white p-4 border-top border-primary border-4 rounded-3">
                                <h5 className="fw-bold my-5">The Convinced</h5>
                                <button className="btn btn-primary btn-round py-4">
                                    <span className="fs-5 fw-bold">$10.000</span> <br />
                                    <p className="pt-3 fs-5">6 <br /> Months Plan</p>
                                </button>

                                <p className="pt-5 fs-5"><span className="fw-bold">16%</span> Minimum Return</p>
                                <p className="fs-5"><span className="fw-bold">0$</span> Management Fees</p>
                                <p className="fs-5"><span className="fw-bold">2</span> Payments of interests</p>
                                <p className="fs-5">Secure Platform</p>
                                <p className="fs-5">24/7 Dedicated Customer Support</p>
                                <p className="fs-5 my-5">Withdrawable anytime</p>

                                <a href="javscript(void)" className="btn btn-primary btn-lg text-uppercase">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <p className="fs-5 text-center mt-3">More plans are accessible from your account, be sure to register and unlock access to your panel.</p>

                </div>
            </div>

            <div className="getStarted bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="fw-bolder mr-5">Start your journey with us now</h3>
                            <a href="javscript(void)" className="btn btn-danger btn-lg mt-4">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="sectionTitle text-center">
                                <div className="secNumber">
                                    <h1 className="bigNum fw-bold">06</h1>
                                </div>
                                <h2 className="fw-bold my-4">Get In Touch</h2>
                                <p className="fs-5 mb-5">We understand your concern, feel free to reach us htmlFor any matter</p>
                            </div>
                        </div>
                    </div>

                    <form className="row g-3 px-5">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label fs-5">Your Name</label>
                            <input type="text" className="form-control p-3" id="name" placeholder="Your name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label fs-5">Your Email</label>
                            <input type="email" className="form-control p-3" id="email" placeholder="Your email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="subject" className="form-label fs-5">Your Subject</label>
                            <input type="text" className="form-control p-3" id="subject" placeholder="Your subject" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="budget" className="form-label fs-5">Project Budget</label>
                            <input type="number" className="form-control p-3" id="budget" placeholder="Project budget" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="message" className="form-label fs-5">Your Message</label>
                            <textarea name="message" className="form-control p-3" cols="30" rows="6"></textarea>
                        </div>
                        <div className="col-md-12 text-start">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I would like to receive periodic emails from Genius Yield with educational articles, interviews, webinars, product updates and news about the company.</label>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-danger btn-round btn-lg px-5">Send Message</button>
                        </div>
                    </form>

                    <div className="row contactBlockGroup mt-5 pb-5 rounded-3">
                        <div className="col-md-3">
                            <div className="contactBlock border-bottom border-danger border-4 p-4">
                                <h5 className="fw-bold my-4 text-danger">Here htmlFor you</h5>
                                <p className="fs-5 mb-5">Contact us 24/7. We are here to assist you</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contactBlock border-bottom border-success border-4 p-4">
                                <h5 className="fw-bold my-4 text-success">Company #1</h5>
                                <p className="fs-5 mb-5">KCG Co Ltd <br /> Thailand DBD #0805563002007 <br /> Knanom - Nakhon Si Thammarat 80210</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contactBlock border-bottom border-info border-4 p-4">
                                <h5 className="fw-bold my-4 text-info">Company #2</h5>
                                <p className="fs-5 mb-5">Artteabcn SL<br />
                                    Registro del Comercio <br />
                                    #B66143694<br />
                                    Barcelona - Catalunya 08012</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contactBlock border-bottom border-warning border-4 p-4">
                                <h5 className="fw-bold my-4 text-warning">Keep in touch</h5>
                                <p className="fs-5 mb-5">
                                    <a href="https://facebook.com"><i className="fab fa-facebook-f text-primary fs-5 p-3"></i></a>
                                    <a href="https://twitter.com"><i className="fab fa-twitter text-danger fs-5 p-3"></i></a>
                                    <a href="https://instagram.com"><i className="fab fa-instagram text-info fs-5 p-3"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default Home;