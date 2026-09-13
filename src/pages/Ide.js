import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import NavBar from '../component/NavBar';


const Ide = () => {
  const navigate = useNavigate()

  const navigateToHome = () =>{
    navigate('/')
  }

  const handleOnChange = ()=>{
    console.log('code')
  }

  return (
    <div className='body'>
      <NavBar/> 
      <h1>IDE</h1>
      <div className='editor'>
        <Editor 
          height='50vh' 
          width='50vw' 
          theme='vs-dark'
          options={{
            fontSize:14,
            minimap:{
              enabled: false
            }
          }}
          onChange={handleOnChange}
          defaultLanguage='javascript' 
          defaultValue='// start your code here' />
      </div>
      <div className='live-display'>
        <LiveProvider>
          <LivePreview />
        </LiveProvider>

      </div>
      <button className='navigate-button' onClick={navigateToHome}>Home</button>
    </div>

    
  )
}

export default Ide