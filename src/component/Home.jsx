import React from 'react'
import './Home.css'
function Home() {
  return (
    <div  className='home'>
     <div className="navbar">
       <div className="logo-items">
         <div className="logo">
            <img src="image/logo.png" alt="" />
         </div>
         <div className="logo-text">
          <p>Secured Token Swap</p>
         </div>
      </div>

     <div className="button">
       <button>Connect</button>
     </div>


     </div>
    </div>
  )
}

export default Home