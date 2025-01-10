import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
function RegisterForm() {

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


	// useEffect(() => {

	// }, [credentials])

	async function register(formData) {


		const newCredentials = {
			email: formData.get('email'),
			password: formData.get('password'),
			password2: formData.get('password2'),
		}
		if (!newCredentials.email || !newCredentials.password) {
			toast('Please fill all fields', toastStyle.error)
			return;
		}
		else if (newCredentials.password !== newCredentials.password2) {
			toast("Passwords don't match", toastStyle.error)
			return;
		}
		try {
			// const res = await fetch('https://reqres.in/api/login', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-type': 'application/json'
			// 	},
			// 	body: JSON.stringify(newCredentials)
			// })

			// if (res.ok)
			// 	toast('You are welcome', toastStyle.success)
			// else {
			// 	toast('Invalid credentails', toastStyle.error)
			// }
		} catch (error) {
			console.error('error:', error);
		}

		// setCredentials(newCredentials)
	}

	return (
		<>
			<form action={register}>
				<div className='my-4'>
					<div className='flex flex-col '>
						<label htmlFor="email" className='my-2 text-sm '>Email</label>
						<input type="email" className='pl-4 py-3 w-full rounded-md text-sm ' name='email' placeholder='username@gmail.com' required />
					</div>
					<div className='flex flex-col mt-2'>
						<label htmlFor="password" className='my-2 text-sm '>Password</label>
						<input type="password" className='pl-4 py-3 w-full rounded-md text-sm ' name='password' placeholder='Password' required />
					</div>
					<div className='flex flex-col mt-2'>
						<label htmlFor="password2" className='my-2 text-sm '>Re-type password</label>
						<input type="password" className='pl-4 py-3 w-full rounded-md text-sm ' name='password2' placeholder='Re-type password' required />
					</div>
				</div>
				<div className='mt-8'>
					<button className='bg-primary text-white px-8 w-full py-2 rounded'>Register</button>
					<Toaster toastOptions={toastStyle} />
				</div>
			</form>

		</>
	)
}

export default RegisterForm
