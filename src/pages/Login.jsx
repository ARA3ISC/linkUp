import React from 'react'
import LoginCard from '../components/login/LoginCard'

function Login() {
	return (
		<>
			<div className="bg-[url('/src/assets/bird_bg.png')] bg-cover bg-left">

				<div className="container h-screen md:flex md:items-center mx-auto">
					<div className="h-screen flex flex-col justify-center items-center md:flex md:flex-row-reverse md:justify-around gap-6 mx-auto">
						<div className="">

							<img src="/src/assets/bird.png" alt="bird" className='animate-float w-[42rem] object-contain md:block hidden' />
						</div>
						<LoginCard />
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
