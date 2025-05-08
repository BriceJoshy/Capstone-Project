import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow px-4 py-3 fixed top-0 left-0 w-full z-10">
      {/* Main Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-white">
          Stitchify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-black text-white placeholder-gray-400"
          />
          <Link to="/men" className="text-white hover:text-blue-400 text-sm">Men</Link>
          <Link to="/women" className="text-white hover:text-blue-400 text-sm">Women</Link>
          <Link to="/kids" className="text-white hover:text-blue-400 text-sm">Kids</Link>
          <Link to="/custom" className="text-white hover:text-blue-400 text-sm">Build from Scratch</Link>
          <Link to="/cart" className="text-white hover:text-blue-400 text-sm">Cart</Link>
          <Link to="/login" className="text-white hover:text-blue-400 text-sm">Login</Link>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center mt-3 space-y-3 sm:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-black text-white placeholder-gray-400"
          />
          <Link to="/men" className="text-white hover:text-blue-400 text-sm">Men</Link>
          <Link to="/women" className="text-white hover:text-blue-400 text-sm">Women</Link>
          <Link to="/kids" className="text-white hover:text-blue-400 text-sm">Kids</Link>
          <Link to="/custom" className="text-white hover:text-blue-400 text-sm">Build from Scratch</Link>
          <Link to="/cart" className="text-white hover:text-blue-400 text-sm">Cart</Link>
          <Link to="/login" className="text-white hover:text-blue-400 text-sm">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
