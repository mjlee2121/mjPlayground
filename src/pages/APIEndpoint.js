import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Editor } from '@monaco-editor/react';

const APIEndpoint = () => {
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

  const endpointCodes =`
  from pydantic import BaseModel
  from fastapi import FastAPI, HTTPException

  app = FastAPI()

  class Input(BaseModel):
    name: ''
    price: 0
    revenue: 0
    is_available: true

  class MarketPlace():
    def __init__(self):
      self.name= ''
      self.price= 0
      self.revenue = 0
      self.is_available = true
  
  mp = MarketPlace()

  @app.post('/submit/')
  async def receive_input(user_input: UserInput):
    
    mp.item.name = user_input.name
    mp.item.price = user_input.price
    
    return {
      "message": "200",
      "user_data": user_input
      }

  @app.get('/available')
  async def is_available():
    return {
      "message": "true"

    }

  @app.get('/revenue')
  async def get_revenue():
    return {

    }
  `

  return (
    <div>
      <h1>Design Market Place</h1>
      <p>
      
      You want to design a system that maintains inventory.<br />
      Endpoints: <br /><br />

	    1.	<b>Post.</b> Takes in an item that has name, value. Returns 200 when item is successfully stored in the record. Assume every item name is unique.<br />
	    2.	<b>Get.</b> Returns true if the item is available.<br />
	    3.	<b>Get.</b> Return total revenue of sold items.<br />
      </p>
      <h1>Solution</h1>
      <Editor 
          height='70vh' 
          width='100vw' 
          theme='vs-dark'
          options={{
            fontSize:14,
            minimap:{
              enabled: false
            }
          }}
          defaultLanguage='python' 
          defaultValue={endpointCodes}
      />

      <button className='navigate-button' onClick={navigateToHome}>Home</button>
    </div>
  )
}

export default APIEndpoint