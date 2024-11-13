import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#">Logo</a>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Right: Button */}
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
