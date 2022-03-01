
const Plan = () => {
return (
  <div className="pricing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="sectionTitle text-center">
                                <div className="secNumber">
                                    <h3 className="bigNum fw-bold"> Plan Table</h3>
                                </div>
                                {/* <h2 className="fw-bold my-4">Plan Table</h2> */}
                                {/* <p className="fs-5 text-secondary mb-5">Some text will go here related with this pricing table</p> */}
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

                                <a className="btn btn-success btn-lg text-uppercase">Get Started</a>
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

                                <a className="btn btn-danger btn-lg text-uppercase">Get Started</a>
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

                                <a className="btn btn-primary btn-lg text-uppercase">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <p className="fs-5 text-center mt-3">More plans are accessible from your account, be sure to register and unlock access to your panel.</p>

                </div>
            </div>
)
}

export default Plan;