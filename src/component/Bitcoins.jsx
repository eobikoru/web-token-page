import React,{useState ,useEffect} from 'react'
import data from '../data'
import Modal from 'react-modal'
import './Bitcoins.css'
// import { useNavigate } from 'react-router-dom'

function Bitcoins() {
  const [isModal , setIsModal] = useState(false)  
  const [bitData ,setBitData ] = useState(data)
  const [loading , setLoading] = useState(true)
  
 
  // const navigate = useNavigate()
 
  useEffect(()=>{
     setTimeout(()=>{
      setIsModal(false);
     },2000)
    
    
  },[isModal])


  const handleModal = (data) => {
  
    console.log(data)
    setIsModal(data)
    

   }
 

  return (
   
  
    <div className='bit-coin'>
      
         <h1>web-token</h1>

      <div className="bitcoin_contens">
        <h3>Connect to wallet</h3>
      
      <div className="bitdata_map" >
      {bitData.map(data=>{
         return   <div className='holder'  onClick={()=> handleModal(data)} key={data.id}>
                  <div className="line"></div>
                <p>{data.name}</p>
                 <img  src={data.image} alt={data.alt} />
            </div>
        })}
      </div>
      </div>
     
     
            <Modal isOpen={isModal}>

            <button onClick={()=> setIsModal(false)}>close</button>
             <h2>hello</h2>
           </Modal>
     
  
     


    </div>
   
  )
}

export default Bitcoins