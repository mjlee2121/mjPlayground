import React from 'react'
import { useEffect } from 'react'
import NavBar from '../component/NavBar'

const Portfolio = () => {
  useEffect(()=>{
      // Setting the background color
      document.body.classList.add('universal-bg')
      return ()=>{
        document.body.classList.remove('universal-bg')
      }
    },[])

  return (
    <div className='body'>
      <NavBar />
      <div className='tic-tac-toe'>
        <h1>d</h1>
        <h1>d</h1>
        <h3>Tic Tac Toe App</h3>
          <p>You can play tic tac toe on this app. It will show who's the next player and who's the winner</p>
            <p>When the game is over, it will allow you to go back to a specific move</p>
            <a href="https://mjlee2121.github.io/react-tictactoe-app/"><i class="fa-solid fa-link"></i></a>

      </div>
      
    </div>
  )
}

export default Portfolio