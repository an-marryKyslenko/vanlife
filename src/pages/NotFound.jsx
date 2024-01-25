import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
	 <main className='not-found container'>
		<h2 className="title">
		Sorry, the page you were looking for was not found.
		</h2>
		<Link to='/' className='button black'>Return to home</Link>
	 </main>
  )
}

export default NotFound