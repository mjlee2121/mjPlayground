// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// ----------------------------------------

import { useState , useEffect } from "react";
import {Box} from './component/Box';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState(0)
  const [multipleInput, setMultipleInput] = useState({
    userName:'',
    age:''
  })
  const [isVisible, setIsVisible] = useState(false)
  const [savedNumber, setSavedNumber] = useState(0)
  const [savedMultipleInput, setSavedMultipleInput] = useState({
    userName:'',
    age:''
  })
  const increase=()=>{
    setSavedNumber(parseInt(savedNumber, 10)+1)
  }

  const decrease=()=>{
    setSavedNumber(parseInt(savedNumber, 10)-1)
      
  }

  useEffect(()=>{
    // react renders after the function was done running, not immediately
    // that's why the numb1 is one step slower than number 2 or 3
    if (savedNumber ===0 || savedNumber===100){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  },[savedNumber])


  const handleSubmit= (event)=> {
    event.preventDefault()
    const parsedValue = parseInt(inputNumber, 10)

    if (!isNaN(parsedValue)){
     setSavedNumber(parsedValue)
    }
    else{
     alert('Please enter a valid number')
    }
    setInputNumber('')
  }



  const handleSecondSubmit = (event) =>{
    event.preventDefault()
    setMultipleInput('')
  }

  const handleSecondChange = (event)=>{
    const {name, value} = event.target

    setSavedMultipleInput({
      ...multipleInput,
      [name]:value
    })

  }

  return (
    <div>
      <div className="first-line">
        <form onSubmit={handleSubmit}>
          <label className="question-label">
          <input 
            type="number" 
            value={inputNumber}
            onChange = {(e)=>setInputNumber(e.target.value)} 
            placeholder="Your Number">
          </input>
          </label>
          <button type="submit">Submit</button>
        </form>
        
        <button onClick={increase} disabled={savedNumber===100}>Increase Num</button>
        <button onClick={decrease} disabled={savedNumber<=0}>Decrease Num</button>
      </div>
      <div className="first-result">
        <div>Your Number: {savedNumber}</div>
        <div className={isVisible? 'visible': 'hidden'}>
          {savedNumber === 0 ? 'This is zero!' : 'This is 100!'}
        </div>
      </div>
      {/* ===============================second input line=============================== */}

      <div className="second-line">
        <form onSubmit={handleSecondSubmit}>
          <label className="question-label">
            Enter your username: 
            <input
              type="text"
              name="userName"
              value={multipleInput.userName}
              onChange={handleSecondChange}
              placeholder="Enter your username"
             />
          </label>
          <label className="question-label"> Enter your age: 
            <input
              type="number"
              name="age"
              value={multipleInput.age}
              onChange={handleSecondChange}
              placeholder="Enter your age"
            />
          </label>
          <input type="submit"/>
        </form>
      </div>
      {/* ===============================second input result=============================== */}
      <div className="second-result">
        Your user name: {savedMultipleInput.userName}
        Your age: {savedMultipleInput.age}
      </div>

      <Box name='minji' age='29'/>
      <Box name='Geoff' age='29' />
    </div>
  )
}


export default App;
