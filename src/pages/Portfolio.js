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
    <div className='body'>
      <NavBar />

    </div>
  )
}

export default Portfolio