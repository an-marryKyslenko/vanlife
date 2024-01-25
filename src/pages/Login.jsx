import React from 'react'
import { Form, Link, redirect, useActionData, useLoaderData, useNavigation } from 'react-router-dom'
import { getUser } from '../api'

export function loader({ request }) {
	return new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {
	const formData = await request.formData()
	const email = formData.get('email')
	const password = formData.get('password')
	const pathname = new URL(request.url)
		.searchParams.get('redirectTo') || '/host'
	try {
		const data = await getUser({ email, password })
		localStorage.setItem('loggedin', true)
		return redirect(pathname)
	} catch (err) {
		return err.message
	}
}
const Login = () => {
	const navigation = useNavigation()
	const status = navigation.state
	const errorMessage = useActionData()
	const message = useLoaderData()
	return (
		<main className='login container'>
			<h2 className="title">Sign in to your account</h2>
			{message && <h2 className='title red'>{message}</h2>}
			{errorMessage && <h2 className='title red'>{errorMessage}</h2>}
			<Form replace method='post' className='login-form'>
				<input
					type="email"
					name='email'
					placeholder='Email address'
					className="login-input"
				/>
				<input
					type="password"
					name='password'
					placeholder='Password'
					className="login-input"
				/>
				<button disabled={status === 'submitting'} className='button'>
					{status === 'submitting' ? 'Loging in...' : 'Log in'}
				</button>
			</Form>
			<div className="login-footer">
				<p>Don’t have an account? </p>
				<Link className='login-create-new'>Create one now</Link>
			</div>
		</main>
	)
}

export default Login