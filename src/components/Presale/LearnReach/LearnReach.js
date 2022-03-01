import './learnreach.css';
import learnss from '../../../images/leanr_ss.png';
import whatsapp from '../../../images/whatsapp.png';
import gmail from '../../../images/gmail.png';
import line from '../../../images/line.png';
import telegram from '../../../images/telegram.png';


function LearnReach()
{
    return ( 
        <section className="learn">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="block text-center">
                            <h1 className="py-5 fw-bold">What you will learn</h1>

                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <h4 className="mt-4 fw-bold">
                                        <i
                                            className="fa fa-american-sign-language-interpreting me-2"
                                        ></i>
                                        What we do
                                    </h4>
                                    <p className="fs-5 my-3">
                                        Read how we will ease the access to
                                        thousands of people to tomorrows finance
                                    </p>
                                    <img
                                        src={learnss}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>

                                <div className="col-md-6 mb-5">
                                    <h4 className="mt-4 fw-bold">
                                        <i
                                            className="fa fa-american-sign-language-interpreting me-2"
                                        ></i>
                                        How it works
                                    </h4>
                                    <p className="fs-5 my-3">
                                        See how the magic happen
                                    </p>
                                    <img
                                        src={learnss}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>

                                <div className="col-md-6 mb-5">
                                    <h4 className="mt-4 fw-bold">
                                        <i
                                            className="fa fa-american-sign-language-interpreting me-2"
                                        ></i>
                                        Why are you here
                                    </h4>
                                    <p className="fs-5 my-3">
                                        We explain why your help is required and
                                        how you will benefit from it
                                    </p>
                                    <img
                                        src={learnss}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>

                                <div className="col-md-6 mb-5">
                                    <h4 className="mt-4 fw-bold">
                                        <i
                                            className="fa fa-american-sign-language-interpreting me-2"
                                        ></i>
                                        When will it work
                                    </h4>
                                    <p className="fs-5 my-3">
                                        Learn about our workflow and timeline
                                    </p>
                                    <img
                                        src={learnss}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-5 learnColLast">
                                    <h4 className="mt-4 fw-bold">
                                        <i
                                            className="fa fa-american-sign-language-interpreting me-2"
                                        ></i>
                                        How much money at the end
                                    </h4>
                                    <p className="fs-5 my-3">
                                        Learn about our workflow and timeline
                                    </p>
                                    <img
                                        src={ learnss }
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="block text-center">
                            <h1 className="py-5 fw-bold">How to reach us</h1>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-6 mb-5">
                                    <a href="https://wa.me/qr/Q5WHHRKISEJVD1">
                                        <img
                                            src={whatsapp}
                                            className="img-fluid"
                                            alt=""
                                            width="150px"
                                        />
                                        <h4>WhatsApp</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-6 mb-5">
                                    <a href="mailto:social@dgtlz.finance">
                                        <img
                                            src={gmail}
                                            className="img-fluid"
                                            alt=""
                                            width="150px"
                                        />
                                        <h4>Email</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-6 mb-5">
                                    <a href="https://line.me/ti/p/Gw_viyAA3J">
                                        <img
                                            src={line}
                                            className="img-fluid"
                                            alt=""
                                            width="150px"
                                        />
                                        <h4>Line</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-6 mb-5">
                                    <a href="https://t.me/DGTLZfinance">
                                        <img
                                            src={telegram}
                                            className="img-fluid"
                                            alt=""
                                            width="150px"
                                        />
                                        <h4>Telegram</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default LearnReach;