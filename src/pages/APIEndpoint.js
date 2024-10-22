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

  const modelsCodes = `
  from fastapi import FastAPI
  from pydantic import BaseModel

  class Listing(BaseModel):
    id: int
    name: str
    price: float
  `

  const endpointCodes =`
  from pydantic import BaseModel
  from fastapi import FastAPI, HTTPException, response
  from models import Listing

  app = FastAPI()

  fm = []
  total_revenue = 0 

  # post a listing
  @app.post('/post')
  async def post(listing: Listing, response: Response):
    if listing not in fm:
      fm.append(listing)
      response.status_code=200
      return {"message":f"{listing} has been added"}
    else:
      raise HTTPException(status_code=404, detail="item already exist")


  @app.get('/')
  async def get_all_items():
    return {"all the items are": fm}


  @app.delete('/purchase/{listing_id}')
  async def purchase(listing_id:int):
    global total_revenue
    for listing in fm:
      if listing.id == listing_id:
        total_revenue = total_revenue + listing.price
        fm.remove(listing)
        return {"message":f"{listing.name} has been purchased"}
    else:
      raise HTTPException(status_code=404, detail="the item is not available")
      

  @app.get('/is_available/{listing_id}')
  async def is_available(listing_id: int):
    for listing in fm:
      if listing.id == listing_id:
        return {"message": 'true'}
    
    return HTTPException(status_code=404, detail="the item is not available")

  @app.get('/get_total_revenue')
  async def get_total_revenue():
    return {"total revenue:": total_revenue}
  `

  return (
    <div>
      <h1>Design Market Place</h1>
      <p>
      
      You want to design a system that maintains inventory.<br />
      Endpoints: <br /><br />

	    1.	<b>Post.</b> Takes in an item that has name, value. Returns 200 when item is successfully stored in the record. Assume every item name is unique.<br />
	    2.  <b>Post.</b> Sell an item based on the name.
      3.  <b>Get.</b> Returns true if the item is available.<br />
	    4.	<b>Get.</b> Return total revenue of sold items.<br />
      </p>
      <h1>models.py</h1>
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

      <h1>main.py</h1>
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