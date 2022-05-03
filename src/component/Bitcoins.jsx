import React, { useState, useEffect } from 'react'
import data from '../data'
import Modal from 'react-modal'
import './Bitcoins.css'
// import { useNavigate } from 'react-router-dom'

function Bitcoins() {
  const [isModal, setIsModal] = useState(false)
  const [isModaltwo, setIsModaltwo] = useState(false)
  const [bitData, setBitData] = useState(data)



  // const navigate = useNavigate()



  setTimeout(() => {
    setIsModal(false);
  }, 3000)

  //  setLoading(false)




  const handleModal = (data) => {
    console.log(data)
    setIsModal(data)
    setIsModal(true)
    setIsModaltwo(true)
    // handleModaltwo()
    // setIsModal(false);
  }
  const handleModaltwo = (data) => {
    console.log(data)
    setIsModal(data)
    setIsModaltwo(true)
    // handleModaltwo()
    // setIsModal(false);
  }

  return (


    <div className='bit-coin'>

      <h1>web-token</h1>

      <div className="bitcoin_contens">
        <h3>Connect to wallet</h3>

        <div className="bitdata_map" >
          {bitData.map(data => {
            return <div className='holder' onClick={() => handleModal(data)} key={data.id}>
              <div className="line"></div>
              <p>{data.name}</p>
              <img src={data.image} alt={data.alt} />
            </div>
          })}
        </div>
      </div>

      {/* initializing */}
      {
        isModal ? (<Modal isOpen={isModal} ariaHideApp={false}>

          <button onClick={() => setIsModal(false)}>close</button>
          <h2>initializing......</h2>

        </Modal>) :
          (
            <Modal isOpen={isModaltwo} ariaHideApp={false}>

              <button onClick={() => setIsModaltwo(false)}>close</button>
              <h2>hello two</h2>
            </Modal>
          )
      }







    </div>

  )
}

export default Bitcoins