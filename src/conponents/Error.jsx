import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
	const error = useRouteError()
	const {message,statusText,status} = error
  return (
	 <section className='container'>
		<h1 className="title">{message}</h1>
		<p>{statusText} - {status}</p>
	 </section>
  )
}

export default Error