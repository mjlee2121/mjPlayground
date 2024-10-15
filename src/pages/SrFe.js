import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SrFe = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [procedureCodes, setProcedureCodes] = useState('')
  const [savedProcedureCodes, setSavedProcedureCodes] = useState('')

  const [multipleInput, setMultipleInput] = useState({
    tankName: '',
    date: '',
    tankRadius: '',
    inspectionType: '',
    bottomThickness: ''
  })

  const [savedMultipleInput, setSavedMultipleInput] = useState({
    tankName: '',
    date: '',
    tankRadius: '',
    inspectionType: '',
    bottomThickness: ''
  })


  const navigate = useNavigate()

  const navigateToHome = () =>{
    navigate('/')
  }
  const handleChange = (event) => {
    const {name,value} = event.target
    
    setMultipleInput({
      ...multipleInput,
      [name]:value
    })

  }
  
  useEffect(()=>{
    validateInspectionType(multipleInput.bottomThickness)
  },[multipleInput.bottomThickness])

  const validateInspectionType = (bottomThickness) =>{
    if (bottomThickness<0.1 || bottomThickness >1){
      setErrorMessage('Not a valid value')
    }
    else{
      setErrorMessage('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSavedMultipleInput(multipleInput)

    setMultipleInput({
      tankName: '',
      date: '',
      tankRadius: '',
      inspectionType: '',
    })
  }

  const handleProcedureCodeChange = (event) => {
    const {name, value} = event.target
    console.log('my valu', value)
    setProcedureCodes(value)

  }
  const handleProcedureCodeFormSubmit = (event) =>{
    event.preventDefault()
    setSavedProcedureCodes(procedureCodes)
    setProcedureCodes('')

  }

  return (
    <div>
      <div className='page-description'>
        <h1>Review of Failed Technical Interview - SR - FrontEnd</h1>
        <p>I couldn't solve this problem when I was taking technical test for a company 'SR'</p>
        <h2>Problem Description</h2>
        <p>
          1. Add inputs for: <br />
            - Tank Name <br />
            - Date <br />
            - Tank Radius<br />
            - Inspection Type ('PAUT' and/or 'Visual') <br /><br />
                
          2. Display the value entered in each input under 'Current Values'<br /><br />
            
          3. Conditionally display an input and current value for Bottom Thickness if the inspection type is 'PAUT'<br />
            - Validate that the entered Bottom Thickness is in range 0.1 - 1 (inclusive)<br />
            - Display an error when validation is failing<br />
                - red, bold text<br />
                - in a node w/ height of 100px<br />
                - vertically and horizontally centered<br /><br />
            
          4. Add a form title as a prop of a reusable InspectionForm component<br /><br />

          5. Add a text input for procedure codes (an arbitrary string which varies for each inspection)<br />
          - Codes are entered one at a time <br />
          - Multiple codes may be added, and the same code may be added multiple times<br />
          - Values should be stored in the order they were added<br />
          - Display a list of the entered codes under 'Current Values'<br />
          - Allow the user to delete a specific code<br /><br />
        </p>
        <h2>Solution</h2>
        <div className='solution'>
          <form id='inspectionForm'  onSubmit={handleSubmit}>
            <div className='form-example'>
              <label>Enter the tank name</label>
              <input 
                type='text'
                name='tankName'
                value={multipleInput.tankName}
                onChange={handleChange}
                placeholder='Enter the tank name'
                /><br />

              <label>Enter the date</label>
              <input 
                type='text'
                name='date'
                value={multipleInput.date}
                onChange={handleChange}
                placeholder='Enter the date'
                /><br />

              <label>Enter the tank radius</label>
              <input 
                type='float'
                name='tankRadius'
                value={multipleInput.tankRadius}
                onChange={handleChange}
                placeholder='Enter the tank radius'
                /><br />

              <label>Enter the inspection type</label>
              <input 
                type='text'
                name='inspectionType'
                style={{width:'200px'}}
                value={multipleInput.inspectionType}
                onChange={handleChange}
                placeholder='Enter the inspection type'
                /><br />

              <div className={multipleInput.inspectionType==='PAUT' ? 'sr-visible':'sr-invisible'}>
                <label>Enter the bottom thickness</label>
                <input 
                  type='float'
                  name='bottomThickness'
                  style={{width:'200px'}}
                  value={multipleInput.bottomThickness}
                  onChange={handleChange}
                  placeholder='Enter the bottom thickness'
                  /><br />
                  {errorMessage && <p style={{color:'red'}}><b>{errorMessage}</b></p>}
              </div>
                <input type='submit' /><br />
            </div>
          </form>
          
          <form id='procedureCodeForm' submit={handleProcedureCodeFormSubmit}>
            <div className='form-procedure-codes'>
              <label>Enter the procedure codes</label>
                  <input 
                    type='text'
                    name='procedureCodes'
                    style={{width:'200px'}}
                    value={procedureCodes}
                    onChange={handleProcedureCodeChange}
                    placeholder='Enter the procedure codes'
                    /><br />
                  <input type='submit' /><br />
            </div>
          </form>

          <div>
          <b>Current Values</b>
          <p>Tank Name:  {savedMultipleInput.tankName}</p>
          <p>Date:  {savedMultipleInput.date}</p>
          <p>Tank Radius:  {savedMultipleInput.tankRadius}</p>
          <p>Inspection Type:  {savedMultipleInput.inspectionType}</p>
          <p>bottom Thickness:  {savedMultipleInput.bottomThickness}</p>
          <p>Procedure Codes:  {savedProcedureCodes.procedureCodes}</p>
          </div>
          
        </div>
      </div>
      

      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>

    </div>
  )
}

export default SrFe