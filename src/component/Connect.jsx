import React from 'react'
import Home from './Home'
import "./Connect.css"
import {Link} from 'react-router-dom'
import FooterAll from './FooterAll'
function Connect() {
  return (
    <div className='section'>
        <Home/>
        <div className="section_body">
            <div className="sec_img">
                <img src="image/logo.png" alt="" />
            </div>
            <div className="sec_note">
                <p>  <Link to="/">

                
                    <span className='spon'>
                    
                        SECURED TOKEN   SWAP</span>
                        
                        </Link> is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making SecuredSwap wallets a safer choice compared to desktop or browser extension wallets</p>
            </div>
            <div className="sec_btn">
                <div className="rapper">
                <div className="sec-button">
                    <button>Retification</button>
                </div>
                <div className="sec-button">
                    <button>Validation</button>
                </div>
                <div className="sec-button">
                    <button>Recovery</button>
                </div>
                <div className="sec_last_btn">
                    <button>Synchronize</button>
                </div>
                </div>
              
            </div>
        </div>
        <FooterAll/>
    </div>
  )
}

export default Connect