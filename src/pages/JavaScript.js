import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Editor } from '@monaco-editor/react';

const JavaScript = () => {
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

  const modelsCodes =`
  const array1 = [1,4,9,16];
  const map1 = array1.map(function(x) =>{
    return x**2;})

  `


  return (
    <div>
      <h1>Introduction</h1>
      <p>I practice and review JavaScript functions in this page.</p>
      <p>Here are list of example problems </p>
      <li><a href="#map">map</a></li>
      <li><a href="#filter">filter</a></li>

      <div id="map">
        <h1>.map</h1>
        <p>Practice of .map function</p>
        <Editor
          height='60vh' 
          width='100vw' 
          theme='vs-dark'
          options={{
            fontSize:14,
            minimap:{
              enabled: false
            }
          }}
          defaultLanguage='python' 
          defaultValue={modelsCodes}
        />
      </div>

      <div id="filter">
        <h1>.filter</h1>
        <p>practice of .filter function</p>
        <Editor
          height='60vh' 
          width='100vw' 
          theme='vs-dark'
          options={{
            fontSize:14,
            minimap:{
              enabled: false
            }
          }}
          defaultLanguage='python' 
          defaultValue={modelsCodes}
        />
      </div>
      
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>
    </div>
  )
}

export default JavaScript