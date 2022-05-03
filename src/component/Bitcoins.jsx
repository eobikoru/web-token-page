import React, { useState, useEffect } from 'react'
import data from '../data'
import Modal from 'react-modal'
import './Bitcoins.css'
import { Audio } from 'react-loader-spinner'



// import { useNavigate } from 'react-router-dom'

function Bitcoins() {
  const [isModal, setIsModal] = useState(false)
  const [isModaltwo, setIsModaltwo] = useState(false)
  const [bitData, setBitData] = useState(data)
  const [modalData, setModalData] = useState([])




  // const navigate = useNavigate()



  setTimeout(() => {
    setIsModal(false);
  }, 8000)

  //  setLoading(false)




  const handleModal = (data) => {
    console.log(data)
    setModalData(data)
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

      <h1 className='yu'>web-token</h1>

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
        isModal ? (<Modal style={{
          overlay: {
            //  opacity: 0.2,
            backgroundColor: "rgba(0, 128, 255, 0.739)",
          },
        }}
          className="modaldisplay" isOpen={isModal} ariaHideApp={false}>

          <div className="first-modaltop">
            <h3>Back</h3>
            <button onClick={() => setIsModal(false)}>Back</button>

          </div>

          <div className="initializing_middle">
            <h3>initializing</h3>
            <Audio
              height="30"
              width="30"
              color='green'
              ariaLabel='loading'
            />
          </div>
          <div className="modal-buttom">
            <div className="modalname">
              {modalData.name}
              <div className="lolp">
               <img src={modalData.image} alt={modalData.alt} />
              </div>

            </div>
            <div className="modaldatah1">
              <h4> Easy to use browser extension</h4>
            </div>

          </div>

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