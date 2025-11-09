import React from 'react'
import NavBar from '../component/NavBar'
import { useEffect } from 'react'

const About = () => {
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
      
    </div>
  )
}

export default About