import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomeIcon = () => {
  const navigate = useNavigate()

  const handleClick = ()=> {
    navigate('/')
  }
  return (
    <div className='home-icon'>
      <i className="fa-solid fa-house" size='2x' style={{cursor:'pointer'}} onClick={handleClick}></i>
    </div>
  )
}

export default HomeIcon