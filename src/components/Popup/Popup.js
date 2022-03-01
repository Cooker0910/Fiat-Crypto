import './popup.css';

function Popup() {
    return ( 
        <div className="modal fade" id="connectWallet">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Connect to a wallet</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="wallet_body">
                        <a href="https://google.com">
                            Install Binance Chain Wallet
                            <i className="fa fa-box"> </i>
                        </a>
                        <a href="https://google.com">
                            Install Metamask
                            <i className="fas fa-mask"></i>
                        </a>
                        <a href="https://google.com">
                            WalletConnect
                            <i className="fab fa-google-wallet"> </i>
                        </a>
                        <a href="https://google.com">
                            Fortmatic
                            <i className="fa fa-pallet"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Popup;