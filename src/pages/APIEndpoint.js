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
  
  const modelsCodes_3=`
  from fastapi import FastAPI
  from pydantic import BaseModel
  from typing import Optional
  import uuid

  class Book(BaseModel):
    id: str #str = Field(default_factory=lambda: str(uuid.uuid4())) # ensures every Client instance has a unique id if not explicitly provided.
    title: str
    author: str
    year: int
    price: float
  `

  const endpointCodes_3=`
  books = []
  book_id_number=1

  @app.post('/books/', response_model=dict)
  async def register_new_book(book: Book, response: Response):
    global book_id_counter
    new_book = book.dict()
    new_book['id']=book_id_counter
    books.append(new_book)
    book_id_counter+=1
    return {"message":"Book added successfully", "book":new_book}


  # get a list of all books
  @app.get('/books', response_model=List[dict])
  async def get_all_books():
    return books
  
  # get a single book by ID
  @app.get('/books/{books_id})
  async get_book(book_id:int):
    for book in books:
      if book['id']== book_id:
        return book
    raise HTTPException(status_code=404, message="book not found")
  
  # update a book by ID
  @app.put('/books/{book_id}', response_model=dict)
  async def update_book(book_id:int, updated_book:Book):
    for book in books:
      if book_id == book['id']:
        book.update(updated_book.dict())
        return {"message":"Book updated"}
    raise HTTPException(status_code=404, details="book not found")

  
  # Delete a book by ID
  @app.delete('/books/{book_id}', response_model=dict)
  async def delete_book(book_id:int):
    for book in books:
      if book['id']==book_id:
        books.remove(book)
        return {"message": "Book deleted"}
    raise HTTPException(status_code=404, detail="Book not found")

  `

  const modelsCodes_4 = `
  from fastapi import FastAPI
  from pydantic import BaseModel
  from typing import Optional
  import uuid

  class Driver(BaseModel):
    id: int
    name: char


  class Rider(BaseModel):
    id: int
    username: char
    pickup_request_location: tuple
    dropoff_request_location: tuple
    pickup_request_time: datetime
    dropoff_request_time: datetime
    expected_duration: datetime
    expected_distance: float
    assigned_driver: driver = Driver()
  `
  const endpointCodes_4=`
    # Driver sign up
    drivers_list =[]
    duration = 0

    @app.post('/signup')
    async def signup(driver:Driver, response:Response):
      # check for duplicated ID
      if any(existing_driver.id == drivers_list.id for existing_driver in drivers_list):
        raise HTTPException(status_code=404, detail="Duplicated driver")
      
      # when the driver successfully registered
      drivers_list.append(driver)
    
    @app.post('/request)
    async def request_ride(rider: Rider, response:Response):
      

    
    def haversine(coord1, coord2):
      takes care of haversine formula
      return distance

  `


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

      <h1>3. Design a Book Inventory</h1>
      <p>
      Create a FastAPI application for managing a book inventory.
      The API should have the following endpoints: <br />
      <b>1. Add a new book (POST /books/)<br /></b>
      Request Body: title, author, year, price<br />
      <b>2. Get a list of all books (GET /books/)<br /></b>
      Response: List of all books in the inventory<br />
      <b>3. Get a single book by its ID (GET /books/{'{book_id}'})<br /></b>
      Response: The book's details or an error message if it doesn't exist<br />
      <b>4. Update a book's details (PUT /books/{'{book_id}'})<br /></b>
      Request Body: title, author, year, price<br />
      Response: Updated book details or an error message if the book isn't found<br />
      <b>5. Delete a book by its ID (DELETE /books/{'{book_id}'})<br /></b>
      Response: Confirmation message or an error message<br />

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
        defaultValue={modelsCodes_3}
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
          defaultValue={endpointCodes_3}
      />

      <h1>4. Uber/Lyft rides</h1>
      <p>
      An endpoint for drivers to sign up. And users to request/cancel rides <br />
      When the user request a ride have the payload body contain time duration estimate and distance <br/>
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
        defaultValue={modelsCodes_4}
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
          defaultValue={endpointCodes_4}
      />


      <button className='navigate-button' onClick={navigateToHome}>Home</button>
    </div>
  )
}

export default APIEndpoint