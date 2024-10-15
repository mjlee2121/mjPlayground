import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Animation = () => {
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
      <h1>Hi this is animation page</h1>
      <p>Currently on construction</p>
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>  
    </div>

    

  )
}
