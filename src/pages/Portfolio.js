import React from 'react'
import { useEffect } from 'react'
import NavBar from '../component/NavBar'
import './Portfolio.css'
import tictactoeImage from '../assets/portfolio/tictac.png'
import phoneImage from '../assets/portfolio/phone.png'

const Portfolio = () => {
  useEffect(()=>{
      // Setting the background color
      document.body.classList.add('universal-bg')
      return ()=>{
        document.body.classList.remove('universal-bg')
      }
    },[])

  return (
    <div className='portfolio'>
      <NavBar />
      
        <div className='content'>
          <div className='text'>
            <h1>Tic Tac Toe App</h1>
            <p>You can play tic tac toe on this app. It will show who's the next player and who's the winner</p>
            <p>When the game is over, it will allow you to go back to a specific move</p>
            <a href="https://mjlee2121.github.io/react-tictactoe-app/" target='_blank'>Click HERE</a>
          </div>
          <div className='tic-tac-toe-image'>
            <img src={tictactoeImage} alt="tic-tac-toe-img" className="tic-tac-toe-img" />
          </div>
        </div>

        <div className='content'>
          <div className='text'>
            <h1>Mj Phone</h1>
            <p>Built with JavaScript & React Mimicking how a phone works. It does not actually call anyone.</p>
            <p>I used HTML, CSS, JavaScript, and React to build the website</p>
            <a href="https://mjlee2121.github.io/phone-v2/" target='_blank'>click HERE</a>
          </div>
          <div className='phone-image'>
            <img src={phoneImage} alt="phone-img" className="tic-tac-toe-img" />
          </div>
          
        </div>
      
    </div>
  )
}

export default Portfolio