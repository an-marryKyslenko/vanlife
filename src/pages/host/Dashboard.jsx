import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import { requireAuth } from '../../utils'
import HostVans from './HostVans'
export async function loader({request}){
	await requireAuth(request)
}
const Dashboard = () => {
  return (
	 <section className='dashboard'>
		<div className="dashboard-income  container">
			<h2 className="title">Welcome!</h2>
			<p className='date-last'>Income last <span>30 days</span></p>
			<Link className='details' to='income'>Details</Link>
			<h2 className='price-title'>$2,260</h2>
		</div>
		<div className="dashboard-review  container">
			<h4 className="dashboard-review-title">Review score</h4>
			<div className="dashboard-rating"><span className='star'><BsFillStarFill/></span> 5.0<span>/5</span></div>
			<Link className='details' to='reviews'>Details</Link>
		</div>
		
		<HostVans cl='dashboard-vans'/>

	 </section>
  )
}

export default Dashboard