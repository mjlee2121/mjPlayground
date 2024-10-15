import React from 'react'
import { useNavigate } from "react-router-dom";

const SrBe = () => {
  const navigate = useNavigate()

  const navigateToHome = () =>{
    navigate('/')
  }

  return (
    <div>
      <h1>Review of Failed Technical Interview - SR - Backend</h1>
      <h2>Problem Description</h2>
      <p>
        Mock API Exercise<br /><br />

        Add the following endpoints to this mock CRUD api. Consider common errors<br />
        and appropriate status codes.<br /><br />

        1. Add an endpoint to retrieve a specific record by ID<br />
        2. Add an endpoint to create a new record<br />
        3. Add an endpoint to update an existing record<br /><br />

        4. Discuss<br />
            - What would an appropriate url/HTTP method be for each of the added routes?<br />
            - How would you go about connecting to the API from a React web app?<br />
            - How would you structure your API to be more scalable as the number of records grows?<br />
            - How would you handle input validation to ensure data integrity?<br />

      </p>
      <h2>Solution</h2>
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>

    </div>
  )
}

export default SrBe