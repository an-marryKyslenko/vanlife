import React, { Suspense} from 'react'
import { Await, defer, Link, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({request}){
	await requireAuth(request)
	return defer({vans: getVans()})
}
const HostVans = ({cl}) => {
	const data = useLoaderData()
  return (
	 <section className={cl ? 'dashboard-vans host-vans container': 'host-vans container'}>
		<h2 className={cl ? 'dashboard-title title' : 'title'}>Your listed vans</h2>
		{cl && <Link to="vans" className='details' >Show all</Link>}
		<Suspense fallback={<h2 className='title'>Loading...</h2>}>
		<Await resolve={data.vans}>
			{(vansData)=>{
				const vans = vansData.filter(van=>van.hostId === '123')
				return (
					<div className="host-vans-items">
						{vans.map(van=>{
							const {id,name,imageUrl,price} = van
							return (
							<Link key={id} to={cl ? `/host/vans/${id}` : id} className='host-item'>
								<img className='host-item-img' src={imageUrl} alt={name} />
								<h5 className="host-item-name">{name}</h5>
								<h6 className='host-item-price'>${price} <span>/day</span></h6>
							</Link>)
						})}
					</div>
				)
			}}
		
		</Await>
		</Suspense>
	 </section>
  )
}
export default HostVans