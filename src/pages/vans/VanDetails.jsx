import React, { Suspense } from 'react'
import {Link, useLocation, useLoaderData, defer, Await } from 'react-router-dom'
import { getVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({params}){
	return defer({van: getVans(params.id)})
}
const VanDetails = () => {
	const location = useLocation()
	const vanPromise = useLoaderData()
	
	const search = location.state?.search || ''
	const searchType = location.state?.type || 'all'
  return (
	 <section className='van'>
		<div className="van-container container">
			<Link relative='path' to={`..?${search}`}><span className='arrow'></span>Back to {searchType} vans</Link>
			<Suspense fallback={<h2 className='title'>Loading...</h2>}>
				<Await resolve={vanPromise.van}>
					{van=>{
						const {name,price,type,imageUrl,description} = van
						return (
							<>
								<div className="van-image">
									<img src={imageUrl} alt={name} />
								</div>
								<div className={`type ${type}`}>{type}</div>
								<div className="van-name title">{name}</div>
								<div className="van-price">${price}<span> /day</span> </div>
								<p className="van-text">{description}</p>
								<button className='button'>Rent this van</button>
							</>
						)
					}}
				</Await>
			</Suspense>
		</div>
	 </section>
  )
}

export default VanDetails