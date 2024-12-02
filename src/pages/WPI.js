import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import course from '../assets/courseAsset.json'

const WPI = () => {
  // const [jsonContent, setJsonContent] = useState(null)
  // const [error, setError] = useState(null)
  const courseAsset = course
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

  // const fetchJsonContent = async () => {
  //   try{
  //     const response = await fetch('/Users/minjilee/Project/mjPlayground/public/course.json')
  //     if (!response.ok){
  //       console.log('response not ok')
  //       throw new Error(`HTTP error! Status: ${response.status}`)
  //     }
  //     const data = await response.json()
  //     setJsonContent(data)
  //     setError(null)
  //   } catch(err){
  //     console.error('Error fetching the JSON file:', err)
  //     setError('Error loading JSON content')
  //   }
  // }

  const storedData = {}

  Object.entries(courseAsset).forEach(([key, value])=>{
    storedData[key]=value
  }) // this creates object

  const storedDataArray = Object.values(storedData) // this creates array


  return (
    <div>
      <h1>Review of Technical Interview - WPI</h1>
      <p>I was given course information in course.json file</p>
      <p>The task is to display it on the UI in whatever format I'd like</p>
      {/* <p>Click the <b>More</b> button below to open and see the course.json file content</p>
      <button className='json-content-button' onClick={fetchJsonContent}>JSON content</button>
      <div>{error && <p style={{color: 'red'}}>{error}</p>}
      {jsonContent && (
        <pre
          style={{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            border: '1px solid #ddd',
            overflowX: 'auto',
        }}
        >
          {JSON.stringify(jsonContent, null, 2)}
        </pre>
      )}
      </div> */}

      <h1>Course Details</h1>
      {storedDataArray.map((course, index) => (
        <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>Course {index + 1}</h2>
          <ul>
            {Object.entries(course).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
        
      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>
    </div>
  )
}

export default WPI