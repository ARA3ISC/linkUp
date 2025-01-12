import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
	const [isMenuToggeled, setIsMenuToggeled] = useState(false)

	function toggleMenu() {
		console.log('inside usestate');

		setIsMenuToggeled(prev => !prev)
	}


	return (
		<>
			<nav className='bg-primary sticky top-0 z-[20]'>
				<div className="container mx-auto ">
					<div className=' flex justify-between items-center  px-8 py-4'>
						<Link to="/" className='text-2xl text-white'>LinkUp</Link>
						<div className='hidden text-white md:flex md:items-center'>
							<NavLink to="/login" className='mx-7 menu__link'>Login</NavLink>
							<NavLink to="/register" className='mx-7 p-2 bg-white text-primary rounded-lg '>Get Started Now</NavLink>
						</div>

						<button className='md:hidden' onClick={toggleMenu}>
							{
								!isMenuToggeled ? <i className="fa-solid fa-bars fa-xl text-white" ></i> : <i className="fa-solid fa-xmark fa-2xl text-white"></i>
							}
						</button>


					</div>
					{isMenuToggeled ? <MobileMenu top="top-0 " toggle={toggleMenu} /> : <MobileMenu top="top-[-1200px]" toggle={toggleMenu} />}


				</div>

			</nav>
		</>
	)
}

export default Navbar
