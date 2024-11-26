import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const JSStaticMethods = () => {
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

  const array = [1,2,3,4,5,5,6]
  const object1 = {
    'name':'Alice',
    'name':'Bob',
    'name':'claire'
  }

  console.log(Object.keys(object1))

  return (
    <div>

      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>
    </div>
  )
}

export default JSStaticMethods