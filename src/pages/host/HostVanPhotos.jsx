import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
  const {van}=useOutletContext()
  const {imageUrl,name,} = van
  return (
	 <article className='photos'>
    <img src={imageUrl} alt={name} />
   </article>
  )
}

export default HostVanPhotos