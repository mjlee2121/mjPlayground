import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'


const Ide = () => {
  const navigate = useNavigate()

  const navigateToHome = () =>{
    navigate('/')
  }

  useEffect(()=>{
    //background color
    document.body.classList.add('universal-bg')
    return ()=>{
      document.body.classList.remove('universal-bg')
    }
  },[])
  const handleOnChange = ()=>{
    console.log('code')
  }

  return (
    <div>
      <h1>IDE</h1>
      <p></p>
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
          <LiveError />
          <LivePreview />
        </LiveProvider>

      </div>
      <button className='navigate-button' onClick={navigateToHome}>Home</button>
    </div>

    
  )
}

export default Ide