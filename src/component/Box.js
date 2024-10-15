import React from 'react'

const Box = (props)=>{
  return(
  <div className='box'>
    {props.name}
    {props.age}
  </div>
  )
}

export default Box