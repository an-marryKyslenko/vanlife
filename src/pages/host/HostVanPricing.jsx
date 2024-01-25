import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  const {van} = useOutletContext()
  const {price} = van
  return (
	 <article className='pricing'>
    ${price}.00<span> /day</span>
   </article>
  )
}

export default HostVanPricing