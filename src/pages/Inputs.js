import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from '../component/HomeIcon'

const Inputs = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    //background color
    document.body.classList.add('universal-bg')
    return ()=>{
      document.body.classList.remove('universal-bg')
    }
  },[])

  const [inputNumber, setInputNumber] = useState('')
  const [multipleInput, setMultipleInput] = useState({
    userName:'',
    email:'',
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
    setSavedMultipleInput(multipleInput)
    setMultipleInput({
      userName:'',
      email:'',
      age:''
    })
  }

  const handleSecondChange = (event)=>{
    const {name, value} = event.target

    setMultipleInput({
      ...multipleInput,
      [name]:value
    })

  }
  
  const navigateToHome = () =>{
    navigate('/')
  }

  return (
    <div className="body-page">
      <HomeIcon /> 
      <div className="description">
        <h1>This is input and form playground</h1>
        <p>This place is just my experiments on form and input</p>
      </div>
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
          <input type="submit"/>
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
          <label className="question-label"> Enter your email: 
            <input
              type="email"
              name="email"
              value={multipleInput.email}
              onChange={handleSecondChange}
              placeholder="Enter your email"
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
        Your user name: {savedMultipleInput.userName}<br/>
        You email: {savedMultipleInput.email} <br/>
        Your age: {savedMultipleInput.age} <br/>
      </div>

      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>
    </div>
  )
}

export default Inputs