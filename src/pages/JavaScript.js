import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Editor } from '@monaco-editor/react';
import { map1Codes, map2Codes, filter1Codes } from '../codeQueries/JavaScriptQuery.js'
// import map2Codes from '../codeQueries/JavaScriptQuery.js'
// import filter1Codes from '../codeQueries/JavaScriptQuery.js'

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
  /** below is for map1 practice */
  // const map1Codes = `
  //   const array1 = [1,4,9,16];
  //   const map1 = array1.map(function(x) =>{
  //     return x**2;})
  // `

  /** below is for map2 practice*/
  const array2 = [1,2,3,4,5,6,7,8,9,10]
  const handleClick2= (number)=>{
    console.log(number)
  }
  
  /** below is for filter1 1 practice */
  
  return (
    <div>
      <h1>Introduction</h1>
      <p>I practice and review JavaScript functions in this page.</p>
      <p>Here are list of example problems </p>
      <li><a href="#map">map</a></li>
      <li><a href="#filter">filter</a></li>

      <div id="map">
        <h1>.map-1</h1>
        <p>Print out the square values of elements in an array</p>
        <Editor
          height='25vh' 
          width='97vw' 
          theme='vs-dark'
          options={{
            fontSize:14,
            minimap:{
              enabled: false
            }
          }}
          defaultLanguage='python' 
          defaultValue={map1Codes}
        />

        <h1>.map-2</h1>
        <p>Create 10 buttons using map</p>
        <p>And print out the clicked button's number on console log</p>
        {array2.map((number) => (
            <button className='number-button' key={number} onClick={()=>{handleClick2(number)}}>
              {number}
            </button>
        ))}
        <br />
        <br />
        <br />
        <Editor
          height='40vh' 
          width='97vw' 
          theme='vs-dark'
          options={{
            fontSize:14,
            minimap:{
              enabled: false
            }
          }}
          defaultLanguage='python' 
          defaultValue={map2Codes}
        />
      </div>

      <div id="filter">
        <h1>.filter</h1>
        <p>Given an array of numbers, use the filter() method to create a new array containing only even numbers and show them on the UI</p>

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
          defaultValue={filter1Codes}
        />
      </div>
      
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>
    </div>
  )
}

export default JavaScript