import React from 'react'
import { Link } from 'react-router-dom'

const VansCart = ({id,name,price,type,imageUrl,state}) => {
	
  return (
	 <Link to={id} state={state} className='vans-cart'>
		<div className="cart-container">
			<img src={imageUrl} className='cart-img' alt="" />
			<h5 className="cart-name">{name}</h5>
			<div className="cart-price">${price} <span>/ day</span></div>
			<div className={`type ${type}`}>{type}</div>
		</div>
	 </Link>
  )
}

export default VansCart