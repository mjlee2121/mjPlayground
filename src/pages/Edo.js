import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Edo = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [savedLetter, setSavedLetter] = useState('')

  const navigate = useNavigate()
  
  const navigateToHome = () =>{
    navigate('/')
  }

  const handleClick = (letter) =>{
    setSavedLetter((prevLetter)=>prevLetter + letter)

  }
  const handleReset = () => {
    setSavedLetter('')
  }
  return (
    <div className='page-body'>
      <div className='problem-description'>
        <h1>Review of Failed Technical Interview- EDO</h1>      
        <p>I couldn't solve this problem when I was taking technical take home test for a company called EDO</p>
        <p>I tried my best to remember the problem description - it might be a little off</p>
        <h2>Problem Description</h2>
        <p>Make a button for alphabet A-Z (upper case) and when a user clicks on it, append that and show on the UI</p>
      </div>

      <div className='solution'>
        <h2>Solution</h2>
        
        {alphabet.split('').map((letter)=>(
        <button className='number-button' key={letter} onClick={()=>{handleClick(letter)}}>
          {letter}
        </button>
        ))}
      </div>

      <div className='result-string'>
        The letters you chose: {savedLetter}<br />
        <button className='reset-button' onClick={handleReset}>Reset</button>
      </div>

      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>
    </div>
  )
}

export default Edo