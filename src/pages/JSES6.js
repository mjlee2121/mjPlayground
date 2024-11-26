import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Editor } from '@monaco-editor/react';
import { map1Codes, map2Codes, filter1Codes,reduceCodes1, codes6 } from '../codeQueries/JavaScriptQuery.js'
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

  /** below is for 1. map1 practice */
  // const map1Codes = `
  //   const array1 = [1,4,9,16];
  //   const map1 = array1.map(function(x) =>{
  //     return x**2;})
  // `

  /** below is for 2. map2 practice*/
  const array2 = [1,2,3,4,5,6,7,8,9,10]
  const handleClick2= (number)=>{
    console.log(number)
  }
  
  /** below is for 3. filter1 practice */
  const array3 = [1,2,3,4,5]
  const evenNum = array2.filter(num=> num %2 === 0)
  
  /** below is for 4. filter2 practice */
  const array4 = [1,3,3,5,6,7,7,4]
  const removeDupNum = array4.filter((value, index, arr )=> arr.indexOf(value)===index)

  /** below is for 5. reduce1 practice */
  const array5 = ["apple", "banana", "apple", "orange", "banana", "banana"];
  const frequency = array5.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  console.log(frequency)
  
  /** below is for 6. reduce2 practice */
  const array6 = [1,2,3,4,5]
  const summation = array6.reduce((sum, num)=>sum+num, 0)

  /** below is for 7. forEach1 practice */


  return (
    <div>
      <h1>Introduction</h1>
      <p>I practice and review JavaScript functions in this page.</p>
      <p>Here are list of example problems. <b>Click</b> to scroll to each section </p>
      <li><a href="#map">map</a></li>
      <li><a href="#filter">filter</a></li>
      <li><a href="#reduce">reduce</a></li>
      <li><a href="#foreach">forEach</a></li>
      <li><a href="#async">async</a></li>


      <div id="map">
        {/******** map functions ********/}
        <h1>1. map-1</h1>
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

        <h1>2. map-2</h1>
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

      {/******** filter functions ********/}
      <div id="filter">
        <h1>3. filter-1</h1>
        <p>Given an array, use the filter() method to create a new array containing only even numbers and show them on the UI</p>
        <b>Array:</b> {array3}<br />
        <b>Result:</b> {evenNum}
        <Editor
          height='30vh' 
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

        <h1>4. filter-2</h1>
        <p>Use filter() to remove duplicate values from an array</p>
        <b>Array:</b> {array4}<br />
        <b>Result:</b> {removeDupNum}
        <Editor
          height='30vh' 
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

      {/******** reduce functions ********/}
      <div id="reduce">
          <h1>5. reduce-1</h1>
          <p>Write a function to count the frequency of each element in an array using the reduce method</p>
          <b>Array:</b> {array5.join(", ")}<br />
          <b>Result:</b> {JSON.stringify(frequency)}
          {Object.entries(frequency).map(([key,value])=>(
            <li key={key}>
              {key}:{value}
            </li>
          ))}
          <Editor
            height='30vh' 
            width='100vw' 
            theme='vs-dark'
            options={{
              fontSize:14,
              minimap:{
                enabled: false
              }
            }}
            defaultLanguage='python' 
            defaultValue={reduceCodes1}
          />

          <h1>6. reduce-2</h1>
          <p>Write a function to sum up all the numbers in the array</p>
          <b>Array:</b> {array6}<br />
          <b>Result:</b> {summation}<br />
          <Editor
            height='30vh' 
            width='100vw' 
            theme='vs-dark'
            options={{
              fontSize:14,
              minimap:{
                enabled: false
              }
            }}
            defaultLanguage='python' 
            defaultValue={codes6}
          />

          
      </div>

      {/******** forEach functions ********/}
      <div id="forEach">

      </div>

      {/******** async functions ********/}
      <div id="async">

      </div>
      
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>
    </div>
  )
}

export default JavaScript