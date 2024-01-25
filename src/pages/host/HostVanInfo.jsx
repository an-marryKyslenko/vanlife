import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
	const {van} = useOutletContext()
	const {name,description,type} = van

  return (
	 <article className='info article'>
		<p className="info-text">
			<span>Name:</span> {name}
		</p>
		<p className="info-text">
			<span>Category:</span> {type}
		</p>
		<p className="info-text">
			<span>Description:</span> {description}
		</p>
		<p className="info-text">
			<span>Visibility:</span> Pablic
		</p>
	 </article>
  )
}

export default HostVanInfo