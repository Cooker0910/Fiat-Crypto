import './logos.css';

import binance_logo from '../../../images/logo_2560px-Binance_logo.svg_.png';
import transferWise_logo from '../../../images/logo_New_Wise_formerly_TransferWise_logo.svg_.png';
import logo_autocrypto from '../../../images/logo_autocrypto-1.png';
import logo_defiyeld from '../../../images/logo_defiyeld.png';
import logo_download from '../../../images/logo_download-3.png';
import logo_genius from '../../../images/logo_genius.png';


function Logos()
{
    return (
        <section className="logos py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-6 col-6 text-center">
                        <img src={ binance_logo } alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 text-center">
                        <img src={ transferWise_logo } alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 text-center">
                        <img src={ logo_autocrypto } alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 text-center">
                        <img src={ logo_defiyeld } alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 text-center">
                        <img src={ logo_download } alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 text-center">
                        <img src={ logo_genius } alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Logos;