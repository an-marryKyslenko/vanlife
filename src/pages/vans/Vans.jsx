import React, { Suspense } from 'react'
import {  Await, defer, useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'
import VansCart from '../../conponents/VansCart'


export async function loader(){
return defer({vans: getVans()})
}
const Vans = () => {
	const[searchParams,setSearchParams] = useSearchParams()
	const typeFilter = searchParams.get("type")
	const dataVans = useLoaderData()
	
  return (
	 <section className='vans'>
		<div className="vans-container container">
			<h2 className='vans-title title'>Explore our van options</h2>
			<Suspense fallback={<h2 className='title'>Loading ...</h2>}>
			<Await resolve={dataVans.vans}>
				{dataVans=>{
					const vans  =  typeFilter 
							? dataVans.filter(van=>van.type === typeFilter.toLowerCase()) 
							: dataVans
					return (
						<>
							<div className="vans-buttons">
								<button onClick={()=>setSearchParams({type: 'simple'})} className={`vans-link simple ${typeFilter === 'simple' ? 'selected':''}`}>Simple</button>
								<button onClick={()=>setSearchParams({type: 'rugged'})} className={`vans-link rugged ${typeFilter === 'rugged' ? 'selected':''}`}>Rugged</button>
								<button onClick={()=>setSearchParams({type: 'luxury'})} className={`vans-link luxury ${typeFilter === 'luxury' ? 'selected':''}`}>Luxury</button>
								{typeFilter 
									?(<button onClick={()=>setSearchParams({})} className='clear-btn' >Clear filter</button>)
									: null}
							</div>
							<div className="vans-carts">
								{vans.map(van=>{
									return <VansCart {...van} state={{search:searchParams.toString(),type: typeFilter}} key={van.id}/>
								})}
							</div>
						</>
							)
				}}
				
			</Await>
			</Suspense>
		</div>
	 </section>
  )
}

export default Vans