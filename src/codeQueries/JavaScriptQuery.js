import React from 'react'

export const map1Codes = `
    const array1 = [1,4,9,16];
    const map1 = array1.map(function(x) =>{
      return x**2;})
  `
export const map2Codes = `
    const array2 = [1,2,3,4,5,6,7,8,9,10]
    const handleClick= (number)=>{
      console.log(number)
    }

    return (
    <div>
      {array2.map((number) => (
            <button className='number-button' key={number} onClick={()=>{handleClick2(number)}}>
              {number}
            </button>
      ))}
    </div>
    )
  `

export const filter1Codes = `
  const array3 = [1,2,3,4,5]
  const evenNum = array2.filter(num=> num %2 === 0)

  `

export const reduceCodes1 = `
  const array5 = ["apple", "banana", "apple", "orange", "banana", "banana"];
  const frequency = array5.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});`

export const codes6 = `
  const array6 = [1,2,3,4,5]
  const summation = array6.reduce((sum, num)=>sum+num, 0)
`
const JavaScriptQuery = () => {
  
  
  return (
    <div></div>
  )
}

export default JavaScriptQuery