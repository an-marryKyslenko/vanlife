import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const
	HostLayout = () => {
		return (
			<main className='host'>
				<div className="host-container container">
					<nav className='host-nav'>
						<NavLink end className={({ isActive }) => isActive ? 'host-link active' : 'host-link'} to=".">Dashboadr</NavLink>
						<NavLink className={({ isActive }) => isActive ? 'host-link active' : 'host-link'} to="income">Income</NavLink>
						<NavLink className={({ isActive }) => isActive ? 'host-link active' : 'host-link'} to="vans">Vans</NavLink>
						<NavLink className={({ isActive }) => isActive ? 'host-link active' : 'host-link'} to="reviews">Reviews</NavLink>
					</nav>
				</div>
				<Outlet />
			</main>
		)
	}

export default HostLayout