import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

function LoginCard() {
	return (
		<div className='pt-12 px-14 pb-7 shadow-lg backdrop-blur-lg'>
			<h1 className='text-5xl'>Login</h1>
			<LoginForm />
			<div className='text-center font-light mt-6 mb-8'>Or Continue With</div>
			<div className='flex justify-center mb-4'>
				<a href='#facebook'>
					<i className="fa-brands fa-facebook text-2xl hover:text-primary transition-colors mx-4"></i>
				</a>
				<a href='#github'>
					<i className="fa-brands fa-github text-2xl hover:text-primary transition-colors mx-4"></i>
				</a>
				<a href='#google'>
					<i className="fa-brands fa-google text-2xl hover:text-primary transition-colors mx-4"></i>
				</a>
			</div>
			<div>
				<p className='text-center font-extralight'>Don't have an account yet? <Link to='/register' className='text-primary cursor-pointer underline'>Register now</Link></p>
			</div>
		</div>
	)
}

export default LoginCard
