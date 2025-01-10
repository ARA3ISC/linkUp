import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
function LoginForm() {

	const [credentials, setCredentials] = useState({})

	const toastStyle = {
		success: {
			style: {
				background: 'green',
				color: 'white'
			}
		},
		error: {
			style: {
				background: 'red',
				color: 'white'
			}
		}
	}


	async function signIn(formData) {


		const newCredentials = {
			email: formData.get('email'),
			password: formData.get('password'),
		}
		if (!newCredentials.email || !newCredentials.password) {
			toast('Please fill all fields', toastStyle.error)
			return;

		}

		try {
			const res = await fetch('https://reqres.in/api/login', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(newCredentials)
			})

			if (res.ok)
				toast('You are welcome', toastStyle.success)
			else {
				toast('Invalid credentails', toastStyle.error)
			}
		} catch (error) {
			console.error('error:', error);

		}

		// setCredentials(newCredentials)
	}

	return (
		<>
			<form action={signIn}>
				<div className='my-4'>
					<div className='flex flex-col '>
						<label htmlFor="email" className='my-2 text-sm '>Email</label>
						<input type="email" className='pl-4 py-3 w-full rounded-md text-sm ' name='email' placeholder='username@gmail.com' required />
					</div>
					<div className='flex flex-col mt-2'>
						<label htmlFor="password" className='my-2 text-sm '>Password</label>
						<input type="password" className='pl-4 py-3 w-full rounded-md text-sm ' name='password' placeholder='Password' required />
					</div>
					<div className='text-right mt-2'>
						<a href="#forget_password" className='text-[#AE4700] text-sm underline'>Forgot Password?</a>
					</div>
				</div>
				<div className='mt-8'>
					<button className='bg-primary text-white px-8 w-full py-2 rounded'>Sign in</button>
					<Toaster toastOptions={toastStyle} />
				</div>
			</form>

		</>
	)
}

export default LoginForm
