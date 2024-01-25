import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {IoIosClose, IoMdPerson} from 'react-icons/io'
const Header = () => {
  return (
	 <header className='header'>
		<Link className='header-logo' to='/'>#vanlife</Link>
		<nav className="header-menu">
			<NavLink to="/about" className={({isActive})=>isActive ? 'header-link active' : 'header-link'}>About</NavLink>
			<NavLink to="/vans" className={({isActive})=>isActive ? 'header-link active' : 'header-link'}>Vans</NavLink>
			<NavLink to="/host" className={({isActive})=>isActive ? 'header-link active' : 'header-link'}>Host</NavLink>
			<NavLink to="/login" className={({isActive})=>isActive ? 'header-link icon active' : 'header-link icon'}><IoMdPerson/></NavLink>

		<button className='go-out-btn' onClick={()=>localStorage.removeItem('loggedin')}><IoIosClose/></button>
		</nav>
	 </header>
  )
}

export default Header