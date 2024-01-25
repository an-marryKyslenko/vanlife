import React from 'react'

const RatingLine = ({stars,arr}) => {
	const filterStar = arr.filter(item=> item.rating == stars)
	const procent = ( filterStar.length /arr.length ) * 100
  return (
	<div className="rating-line">
		<div >{stars} stars</div>
		<div  className='line'>
			<span className='line-color' style={{width: `${procent}%`}}></span>
		</div>
		<div >{procent}%</div>
	</div>
  )
}

export default RatingLine