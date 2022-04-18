import React from 'react'
import './Sectiontwo.css'
function Sectiontwo() {
  return (
    <div className='sectiontwo'>
      <div className="first">
        <div className="top">
          <h1>About and How it works here</h1>
        </div>
        <div className="bottom">
          <div className="sideone">
            <h2>About</h2>
            <p>
              Secured Token Swap is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making Wallets Validation wallets a safer choice compared to desktop or browser extension wallets.</p>
          </div>
          <div className="sidetwo">
            <h2>What is Wallets Validation</h2>
            <p>
              Secured Token Swap connects web applications to supported mobile wallets. Wallets Validation session is started by a scanning a QR code (desktop) or by clicking an application deep link (mobile).</p>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="top">
          <h1>Synchronize, Validate and Recover</h1>
        </div>
        <div className="bottomtwo">
          <div className="bone">
            <div className="num">
            <h1>1.</h1>
            </div>
            <div className="wallet">
            <h3>Wallet Validation</h3>
            </div>
           
            <p>
              You can proceed with this option to validate your wallet using our powerful and secured dapps tools.</p>
              <div className="wallet-btn">
              <button>Validate Wallet</button>
              </div>
            
          </div>
          <div className="btwo">
          <div className="num">
            <h1>2.</h1>
            </div>
            <div className="wallet">
            <h3>Wallet Synchronization</h3>
            </div>
            
            <p>

              Authenticate or Synchronize your wallet using our secure protocol.
            </p>
            <div className="wallet-btn">
            <button>Synchronize Wallet</button>
            </div>
           
          </div>
          <div className="bthree">
          <div className="num">
            <h1>3.</h1>
            </div>
            <div className="wallet">
            <h3>Rectify or Recover Token</h3>
            </div>
           
            <p className='pop'>
              Rectify or Recover lost tokens using End-to-end encryption whick keeps client-side generated keys and all user activity private.

            </p>
            <div className="wallet-btn">
            <button>Rectify Or Recover Wallet</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sectiontwo