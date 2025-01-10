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
			<nav className='sticky top-0 z-[20] mx-auto '>
				<div className=' flex justify-between items-center bg-primary  px-8 py-4'>
					<div className='text-2xl text-white'>LinkUp</div>
					<div className='hidden text-white md:flex items-start'>
						<NavLink to="/login" className='mx-7'>Login</NavLink>
						<NavLink to="/register" className='mx-7'>Register</NavLink>
					</div>

					<button className='md:hidden' onClick={toggleMenu}>
						{
							!isMenuToggeled ? <i className="fa-solid fa-bars fa-xl text-white" ></i> : <i className="fa-solid fa-xmark fa-2xl text-white"></i>
						}
					</button>


				</div>
				{isMenuToggeled ? <MobileMenu top="top-20 " toggle={toggleMenu} /> : <MobileMenu top="top-[-800px]" toggle={toggleMenu} />}


			</nav>
		</>
	)
}

export default Navbar
