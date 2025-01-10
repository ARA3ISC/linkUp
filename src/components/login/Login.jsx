import React from 'react'
import LoginCard from './LoginCard'

function Login() {
	return (
		<>
			<div style={{ minHeight: "100vh" }} className="container bg-[#FEDCC5] flex flex-col md:flex md:flex-row-reverse md:justify-around bg-[url('/src/assets/bird_bg.png')] bg-cover bg-left bg-fixed items-center">
				<img src="/src/assets/bird.png" alt="bird" className='animate-float w-[32rem] object-contain md:block hidden' />
				<LoginCard />
			</div>
		</>
	)
}

export default Login
