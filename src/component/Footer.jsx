import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="txt-btn">
          <div className="footer-text">
            <h1>Get started with Secured Token Swap today</h1>

          </div>
          <div className="footer-btn">
            <Link to="/connect">
              <button>
                Synchronize wallet
              </button>
            </Link>
          </div>
        </div>


      </div>
      <div className="footer-address">

      </div>
    </div>
  )
}

export default Footer