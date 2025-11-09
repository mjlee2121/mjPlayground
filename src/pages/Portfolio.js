import React from 'react'
import { useEffect } from 'react'
import NavBar from '../component/NavBar'

const Portfolio = () => {
  useEffect(()=>{
      // Setting the background color
      document.body.classList.add('universal-bg')
      return ()=>{
        document.body.classList.remove('universal-bg')
      }
    },[])

  return (
    <div>
      <NavBar />
      <div className='section pilates'>
        <h1>Pilates</h1>
      </div>
      <div className='section triathlon'>
        <h1>Triathlon</h1>
      </div>
      <div className='section cooking'>
        <h1>Cooking</h1>
      </div>
      <div className='section sailing'>
        <h1>Sailing</h1>
      </div>

    </div>
  )
}

export default Portfolio