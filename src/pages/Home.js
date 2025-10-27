import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../assets/aniki_hamster.json'

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
  const navigateToIDE = ()=>{
    navigate('/ide')
  }
  const navigateToJSES6 = ()=>{
    navigate('/jses6')
  }
  const navigateToAPIEndpoint = () =>{
    navigate('/apiendpoint')
  }
  const navigateToJSStaticMethods = () =>{
    navigate('/jsstaticmethods')
  }
  const navigateToWPI = () =>{
    navigate('/wpi')
  }
  const navigateToRamp = () => {
    navigate('/ramp')
  }

  useEffect(()=>{
    // Setting the background color
    document.body.classList.add('universal-bg')
    return ()=>{
      document.body.classList.remove('universal-bg')
    }
  },[])

  return (
    <div className='container'>
      <div className='top-menu'>
        <button className='navigate-button'>About</button>
        <button className='navigate-button'>Professional</button>
        <button className='navigate-button'>Professional</button>
      </div>

      <div className='introduction'>

        <h1>Welcome to Minji's Page!</h1>
        <Lottie style={{ width: 200, height: 200 }} animationData={animationData}></Lottie>
        <h2>Hiii, this is home page to my React playground</h2>
        <p>If you'd like to go to other pages, please click from below</p>
      </div>
      <div className='links'>
        <h2>Play ground</h2>
        <button className='navigate-button' onClick={navigateToInputs}>Input Page</button>
        <button className='navigate-button' onClick={navigateToIDE}>IDE</button>
        <button className='navigate-button' onClick={navigateToAPIEndpoint}>API Endpoints</button>
        <button className='navigate-button' onClick={navigateToJSES6}>JS ES6 Array Methods</button>
        <button className='navigate-button' onClick={navigateToJSStaticMethods}>JS Static Methods</button>



        <h2>Technical Interviews Review</h2>
        <button className='navigate-button' onClick={navigateToEdo}>EDO</button>
        <button className='navigate-button' onClick={navigateToSrFe}>SR-FrontEnd</button>
        <button className='navigate-button' onClick={navigateToSrBe}>SR-BackEnd</button>
        <button className='navigate-button' onClick={navigateToWPI}>WPI</button>
        <button className='navigate-button' onClick={navigateToRamp}>Ramp</button>

      </div>
    </div>
  )
}

export default Home