import './welcome.css';

function Banner() {
    return ( 
        <section className='welcome'>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-5">
                                <h1 className="fs-b fw-bold">
                                    Welcome to DGTLZ Private Pre-sale
                                </h1>
                                <p className="mt-5 fs-5">
                                    We firstly want to thank you for taking the time to read our documentation. Our entire team  is at your disposal for any enquiries.
                                </p>
                                <p className="mt-5 fs-5">
                                    <i className="fa fa-check"></i> Small
                                    soft-cap and hard-cap
                                </p>
                                <p className="fs-5">
                                    <i className="fa fa-check"></i> Great
                                    rewards for our early investors
                                </p>
                                <p className="fs-5">
                                    <i className="fa fa-check"></i> Limited
                                    seats to keep our collaborators closer
                                </p>
                                <h1 className="mt-5 fs-b fw-bold shadow">
                                    LAUNCH ON 12/21
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Banner;