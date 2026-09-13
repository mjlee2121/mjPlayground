import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const NavItems = [
  { path: '/', label: 'Home' },
  { path: '/jses6', label: 'JS ES6' },
  { path: '/jsstaticmethods', label: 'JS Static Methods' },
  { path: '/inputs', label: 'Inputs' },
  { path: '/edo', label: 'Edo' },
  { path: '/sr-fe', label: 'Sr FE' },
  { path: '/sr-be', label: 'Sr BE' },
  { path: '/ide', label: 'IDE' },
  { path: '/apiendpoint', label: 'API Endpoint' },
  { path: '/wpi', label: 'WPI' },
  { path: '/ramp', label: 'Ramp' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/hobby', label: 'Hobby' },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleNavbar = () =>{
    setIsOpen(!isOpen)
    console.log('clicked:', isOpen)
  }

  return (
    <header className='topnav-container'>
      <div className='topnav-header'>
        <button className='hamburger-btn' onClick={toggleNavbar} aria-label='Toggle Navigation'>
            &#9776;
        </button>
        </div>
          
            
            <nav className={`topnav-menu ${isOpen ?'expanded' : 'collapsed'}`}>
              {NavItems.map((item) => (
                <NavLink 
                  key={item.path} 
                  to={item.path} 
                  className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
    </header>
    
  
  )
}

export default NavBar