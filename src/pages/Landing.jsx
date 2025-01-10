import React from 'react'
import Button from '../components/buttons/Button'

function Landing() {
	return (
		<>
			<section className='h-screen px-4 py-2 text-center'>
				<h1 className='pt-14 pb-8 landing-h1'>Seamless Conversations, Real-Time Messaging, Anytime You Want</h1>
				<p className='text-[#505050] font-light text-lg'>
					Stay connected with anyone, anywhere, and at any time. Our app ensures smooth, fast, and reliable communication, so you're never out of touch
				</p>
				<div className='flex justify-center py-6'>
					<Button value="Let's Chat!" />
				</div>
				<div className="m-10">
					<img src="/src/assets/smiling-woman.png" alt="smiling-woman" className='w-[32rem] object-contain' />
				</div>
			</section>
		</>

	)
}

export default Landing
