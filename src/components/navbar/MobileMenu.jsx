import { Link, NavLink } from "react-router-dom";

function MobileMenu({ top, toggle }) {
  return (
    <>
      <div
        className={`bg-amber-900/50 md:hidden backdrop-blur-sm border-b-4 h-[100vh] transition-all duration-700 ease-in-out absolute left-0 w-full z-[-1] ${top} text-center text-2xl`}
      >
        <ul className="flex flex-col justify-center text-white">
          <Link to="/" onClick={toggle} className=" m-8">
            Home
          </Link>
          <NavLink to="/login" onClick={toggle} className=" m-8">
            Login
          </NavLink>
          <NavLink to="/register" onClick={toggle} className=" m-8">
            Register
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
