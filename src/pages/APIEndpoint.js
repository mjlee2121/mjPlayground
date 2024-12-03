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

  const modelsCodes_1 = `
  from fastapi import FastAPI
  from pydantic import BaseModel

  class Listing(BaseModel):
    id: int
    name: str
    price: float
  `

  const endpointCodes_1 =`
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
  const modelsCodes_2 = `
  from fastapi import FastAPI
  from pydantic import BaseModel
  from typing import Optional
  import uuid

  class Client(BaseModel):
    id: str #str = Field(default_factory=lambda: str(uuid.uuid4())) # ensures every Client instance has a unique id if not explicitly provided.
    first_name: str
    last_name: str
    email: Optional[str]=None
    day: str
  `
  
  const endpointCodes_2 =`
  client_list = []
  total_capacity = 0
  day_occupancy = {'Mon':0, "Tues":0, "Wed":0, "Thurs":0, "Fri":0, "Sat":0, "Sun":0}
  total_revenue = 0
  day_revenue = {'Mon':0, "Tues":0, "Wed":0, "Thurs":0, "Fri":0, "Sat":0, "Sun":0}

  @app.post('/registration')
  async def register_new_customer(client: Client, response: Response):
    # check for duplicate ID and duplicate client
    if any(existing_client.id == client.id for existing_client in client_list):
      raise HTTPException(status_code=404, detail="Duplicated ID: Give a different user id.")  
    elif any(existing_client.id == client.id 
            and existing_client.first_name == client.first_name 
            and existing_client.last_name==client.last_name 
            for existing_client in client_list):
      raise HTTPException(status_code=404, detail=f"Duplicated client: client {client.first_name, client.last_name} already exists.")  
    
    # check the right day format
    if client.day not in day_occupancy.keys():
      raise HTTPException(status_code=404, detail="Not a valid dau format. Type in shortened version such as 'Mon', 'Thurs', 'Fri'")
    # check the class capacity and revenue
    global total_capacity
    global total_revenue

    if day_occupancy[client.day] == 20:
      raise HTTPException(status_code=404, detail=f"Cannot register, the class is on {client.day}day already full.")
    
    # when the client successfully registered to the class
    client_list.append(client)
    day_occupancy[client.day]+=1
    day_revenue[client.day]+=30

    total_capacity+=1
    total_revenue+=30

    response.status_code=200
    return {"message":f"{client.first_name} {client.last_name} has been added to the class"}


  @app.delete('/cancellation')
  async def cancel_class(client:Client, response:Response):
    global total_capacity
    global total_revenue

    for stored_client in client_list:
      if(
        stored_client.id==client.id
        and stored_client.first_name==client.first_name
        and stored_client.last_name==client.last_name
        and stored_client.day==client.day
      ):
        client_list.remove(stored_client)
        total_capacity-=1
        total_revenue-=30
        day_occupancy[client.day]-=1
        day_revenue[client.day]-=30

        response.status_code=200
        return {"message":f"Client {client.first_name} {client.last_name} is removed."}
    
    raise HTTPException(status_code=404, detail=f"Client {client.first_name} {client.last_name} not found.")

  @app.get('/')
  async def get_all_clients():
    return {"message":f"all the clients are {client_list}"}

  @app.get('/total_revenue')
  async def get_total_revenue():
    global total_revenue
    return {"message":f"total revenue is {total_revenue}"}

  @app.get('/day_revenue/{day}')
  async def get_day_revenue(day: str):
    global day_revenue
    return {"message":f"{day}day revenue is {day_revenue[day]}"}


  @app.get('/total_class_occupancy')
  async def class_occupancy():
    return {"message":f"Total day occupancy is {total_capacity}"}

  @app.get('/day_class_occupancy/{day}')
  async def class_occupancy(day: str):
    return {"message":f"{day}day occupancy is {day_occupancy[day]}"}`
    
  return (
    <div>
      <h1>1. Design Market Place</h1>
      <p>
      
      You want to design a system that maintains inventory.<br />
      Endpoints: <br /><br />

	    1.	<b>Post.</b> Takes in an item that has name, value. Returns 200 when item is successfully stored in the record. Assume every item name is unique.<br />
	    2.  <b>Post.</b> Sell an item based on the name.<br />
      3.  <b>Get.</b> Returns true if the item is available.<br />
	    4.	<b>Get.</b> Return total revenue of sold items.<br />
      </p>
      <h1>models.py</h1>
      <Editor
        height='40vh' 
        width='100vw' 
        theme='vs-dark'
        options={{
          fontSize:14,
          minimap:{
            enabled: false
          }
        }}
        defaultLanguage='python' 
        defaultValue={modelsCodes_1}
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
          defaultValue={endpointCodes_1}
      />
      
      <h1>2. Design a Fitness Center</h1>
      <p>
        Build a system to manage a fitness class. <br />
        Maintain a record of who has attended your class by first and last name. <br />
        As well as net revenue. Your max capacity for the class is 20 and the cost of the class is $30 per session. <br />
        You host this class one session per day for M-F. Start by building the system for one week only.<br />

        First endpoint is a POST request for ‘/registration’. <br />
        Verify that there is space in the class and return a 200 of the customer successfully signs up. <br />
        The payload will contain first name, last name, day of interest for the class<br />

        Second endpoint is a POST request for ‘/cancellation’. <br />
        Verify that the user has indeed signed up the class has not happened yet. If so cancel their appointment.<br />

        Third endpoint is a GET request to get net revenue for the week of appointments. <br />

        Fourth endpoint is a GET request which takes in a value of day and return the total attendees for that day.<br />

      </p>
      <h1>models.py</h1>
      <Editor
        height='40vh' 
        width='100vw' 
        theme='vs-dark'
        options={{
          fontSize:14,
          minimap:{
            enabled: false
          }
        }}
        defaultLanguage='python' 
        defaultValue={modelsCodes_2}
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
          defaultValue={endpointCodes_2}
      />
      <button className='navigate-button' onClick={navigateToHome}>Home</button>
    </div>
  )
}

export default APIEndpoint