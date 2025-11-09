import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NavItem = () => {
  const items = ['Home','About','Portfolio']
  const navigate = useNavigate()
  const location = useLocation()


  const handleClick=(item)=>{
    switch(item){
      case 'Home':
        navigate('/')
        break
      case 'About':
        navigate('/about')

        break
      case 'Portfolio':
        navigate('/portfolio')
        break
      default:
        break
    }    
  }

  const getPath = (path) => {
    switch(path){
      case 'Home':
        return '/'
      case 'About':
        navigate('/about')
        return '/about'
      case 'Portfolio':
        navigate('/portfolio')
        return '/portfolio'
      default:
        return '/'
    }
  }

  return (
    <div className='nav-items'>
      {items.map((item)=>{
        const isActive = location.pathname === getPath(item)
        return(
          <button 
            className={`nav-item ${isActive?'active':''}`}
            key={item} 
            onClick={()=>handleClick(item)}>{item}</button>
        )
      }
      )}
    </div>
  )
}

export default NavItem