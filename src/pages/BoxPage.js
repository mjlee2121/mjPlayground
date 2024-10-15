import React from 'react'
import Box from '../component/Box';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const BoxPage = () => {
  useEffect(()=>{
    document.body.classList.add('universal-bg')
    
    return ()=>{
      document.body.classList.remove('universal-bg')
    }
  },[])

  const navigate = useNavigate()

  const navigateToHome = () =>{
    navigate('/')
  }

  return (
    <div>
      <h1>BoxPage</h1>

      <Box name='minji' age='29'/>
      <Box name='Geoff' age='29' />
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>

    </div>
  )
}

export default BoxPage