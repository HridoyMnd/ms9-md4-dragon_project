import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {
  //handle navLinks Show
  const [show, setShow] = useState(false)
  const handleNavShow = () => {
    setShow(!show)
  }

  //reture code
  return (
    <nav className="p-4 container mx-auto">
      <div className="flex justify-between items-center">

        {/* Left: Logo */}
        <div className="text-3xl font-bold text-gray-700">
          <a >Logo</a>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <div className="max-md:hidden">
          <ul className='text-gray-500 flex space-x-6'>
            <NavLink className="hover:text-gray-900" to="/">Home</NavLink>
            <NavLink className="hover:text-gray-900" to="/about">About</NavLink>
            <NavLink className="hover:text-gray-900" to="/career">Career</NavLink>
          </ul>
        </div>

        {/* Right: Button */}
        <div className='flex items-center gap-3'>

          {/* hidden navlinks */}
          <div className="relative">
            <FaBarsStaggered onClick={handleNavShow} className='text-2xl hidden max-md:flex cursor-pointer' />
            <ul className={`text-gray-500 absolute flex flex-col md:hidden bg-blue-100 text-center right-10 ${show?'flex': 'hidden'} `}>
              <NavLink className=" px-6 py-2 hover:text-gray-900" to="/">Home</NavLink>
              <NavLink className=" px-6 py-2 hover:text-gray-900" to="/about">About</NavLink>
              <NavLink className=" px-6 py-2 hover:text-gray-900" to="/career">Career</NavLink>
            </ul>
          </div>

          {/* buttons */}
          <FaRegUserCircle className='text-3xl' />
          <button className=" font-semibold bg-gray-800 px-5 text-white py-2 rounded">
            Sign In
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
