import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Travel = () => {
  const navigate = useNavigate()
  
  const navigateToHome = () =>{
    navigate('/')
  }
  
  useEffect(()=>{
    // Setting the background color
    document.body.classList.add('universal-bg')
    return ()=>{
      document.body.classList.remove('universal-bg')
    }
  },[])
  
  return (

    <div>

      <button className='navigate-button' onClick={navigateToHome}>Home</button>
      
    </div>
  )
}

export default Travel