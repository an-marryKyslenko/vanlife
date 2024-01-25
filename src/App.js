import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/vans/Vans'
import VanDetails, { loader as vanDetailLoader } from './pages/vans/VanDetails'
import Layout from './conponents/Layout'
import Dashboard from './pages/host/Dashboard'
import Income, { loader as incomeLoader } from './pages/host/Income'
import Reviews, { loader as reviewsLoader } from './pages/host/Reviews'
import HostLayout from './pages/host/HostLayout'
import HostVans, { loader as hostVansLoaader } from './pages/host/HostVans'
import HostVanDetails, { loader as hostVanDetailsLoader } from './pages/host/HostVanDetails'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVanPricing from './pages/host/HostVanPricing'
import NotFound from './pages/NotFound'
import Error from './conponents/Error'
import Login, { action as loginAction, loader as loginLoader } from './pages/Login'

const App = () => {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route element={<Home />} index />
			<Route element={<About />} path="about" />
			<Route
				element={<Vans />}
				path='vans'
				errorElement={<Error />}
				loader={vansLoader}
			/>
			<Route
				element={<VanDetails />}
				path="vans/:id"
				loader={vanDetailLoader}
				errorElement={<Error />}
			/>
			<Route
				element={<Login />}
				path='login'
				loader={loginLoader}
				action={loginAction}
			/>
			<Route element={<HostLayout />} path='host' loader={hostVansLoaader}>
				<Route
					loader={hostVansLoaader}
					element={<Dashboard />}
					errorElement={<Error />}
					index
				/>
				<Route
					loader={incomeLoader}
					element={<Income />}
					path='income'
					errorElement={<Error />}
				/>
				<Route
					loader={hostVansLoaader}
					element={<HostVans />}
					path='vans'
					errorElement={<Error />}
				/>
				<Route
					loader={reviewsLoader}
					element={<Reviews />}
					path='reviews'
					errorElement={<Error />}
				/>
				<Route
					element={<HostVanDetails />}
					path='vans/:id'
					loader={hostVanDetailsLoader}
					errorElement={<Error />}>
					<Route
						loader={hostVanDetailsLoader}
						index
						element={<HostVanInfo />} />
					<Route
						loader={hostVanDetailsLoader}
						path='photos'
						element={<HostVanPhotos />} />
					<Route
						loader={hostVanDetailsLoader}
						path='pricing'
						element={<HostVanPricing />} />
				</Route>

			</Route>
			<Route element={<NotFound />} path='*' />
		</Route>
	))
	return (
		<RouterProvider router={router} />
	)
}

export default App