import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  const navigateToInputs = ()=>{
    navigate('/inputs')
  }
  const navigateToEdo = ()=>{
    navigate('/edo')
  }
  const navigateToSrFe = () =>{
    navigate('/sr-fe')
  }
  const  navigateToSrBe = () =>{
    navigate('/sr-be')
  }
  const navigateToAnimation = () =>{
    navigate('/animation')
  }
  const navigateToBox = () =>{
    navigate('/boxpage')
  }

  return (
    <div>
      <div className='introduction'>

        <h1>Home Page</h1>
        <h2>Hi, this is home page to my React playground</h2>
        <p>If you'd like to go to other pages, please click from below</p>
      </div>
      <div className='links'>
        <h2>Play ground</h2>
        <button className='navigate-button' onClick={navigateToInputs}>Input Page</button>
        <button className='navigate-button' onClick={navigateToAnimation}>Animation Page</button>
        <button className='navigate-button' onClick={navigateToBox}>Box Page</button>
        <h2>Technical Interviews Review</h2>
        <button className='navigate-button' onClick={navigateToEdo}>EDO</button>
        <button className='navigate-button' onClick={navigateToSrFe}>SR-FrontEnd</button>
        <button className='navigate-button' onClick={navigateToSrBe}>SR-BackEnd</button>
      </div>
    </div>
    

  )
}

export default Home