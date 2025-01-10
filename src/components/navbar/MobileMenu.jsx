import { Link, NavLink } from 'react-router-dom'

function MobileMenu({ top, toggle }) {


	return (
		<>
			<div className={`md:hidden backdrop-blur-sm border-b-4 h-[100vh] transition-all duration-700 ease-in-out absolute left-0 w-full z-[-1] ${top} text-center text-xl`}>
				<ul className=''>
					<Link to="/" onClick={toggle} className='block m-8'>Home</Link>
					<NavLink to="/login" onClick={toggle} className='block m-8'>Login</NavLink>
					<NavLink to="/register" onClick={toggle} className='block m-8'>Register</NavLink>
				</ul>
			</div>
		</>
	)
}

export default MobileMenu
