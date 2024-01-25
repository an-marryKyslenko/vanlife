import React, { Suspense } from 'react'
import { Await, defer, Link, NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom'
import { getVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({request,params}){
	await requireAuth(request)
	return defer({van: getVans(params.id)})
}
const HostVanDetails = () => {
	const vanPromise = useLoaderData()
	
	return (
		<section className='host-vans-details container'>
			<Link to='..' relative='path'><span className='arrow'></span>Back to all vans</Link>
			<Suspense fallback={<h2 className='title'>Loading ...</h2>}>
			<Await resolve={vanPromise.van}>
				{van=>{
					const {name,price,type,imageUrl} = van
					return (
						<div className='host-van-details'>
							<img src={imageUrl} className='host-van-image' alt={name} />
							<div className="host-van-top">
								<div className={`type ${type}`}>{type}</div>
								<h4 className="host-van-name">{name}</h4>
								<p className="host-van-price">${price} <span>/day</span></p>
							</div>
							<nav className='host-van-menu'>
								<NavLink end to='.' className={({isActive})=>isActive ? 'host-van-link active': 'host-van-link'}>Details</NavLink>
								<NavLink to='pricing'  className={({isActive})=>isActive ? 'host-van-link active': 'host-van-link'}>Pricing</NavLink>
								<NavLink to='photos' className={({isActive})=>isActive ? 'host-van-link active': 'host-van-link'}>Photos</NavLink>
							</nav>
							<Outlet context={{van}}/>
						</div>
					)
				}}
			</Await>
			</Suspense>
		</section>
	)
}

export default HostVanDetails