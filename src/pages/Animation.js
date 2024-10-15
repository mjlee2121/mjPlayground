import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../assets/aniki_hamster.json'

export const Animation = () => {
  const navigate = useNavigate()
  
  const navigateToHome = () =>{
    navigate('/')
  }

  return (
    <div>
      <h1>Hi this is animation page</h1>
      <Lottie style={{ width: 300, height: 300 }} animationData={animationData}></Lottie>
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>  
    </div>

    

  )
}
