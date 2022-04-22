import React from 'react'
import './FooterAll.css'
import {FaFacebookF } from 'react-icons/fa';
import {AiOutlineTwitter , AiFillGithub ,AiOutlineCopyrightCircle } from 'react-icons/ai';
function FooterAll() {
  return (
    <div className='foot'>
      <div className="icons">
          <div className="icon_content">
          <FaFacebookF className='io'/> 
          </div>
          <div className="icon_content">
          <AiOutlineTwitter className='io'/>
          </div>
          <div className="icon_content">
          <AiFillGithub className='io'/>
          </div>
     
      </div>
      <div className="copyright">
         <p> <AiOutlineCopyrightCircle/> 2021 Secured Token Swap</p>
      </div>
    </div>
  )
}

export default FooterAll