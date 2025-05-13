import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 text-2xl font-bold text-white">
            Stitchify
          </Link>

          {/* Desktop Search */}
          <div className="hidden sm:flex items-center flex-1 mx-8">
            <div className="relative w-full max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link to="/men" className="text-sm text-gray-300 hover:text-white">Men</Link>
            <Link to="/women" className="text-sm text-gray-300 hover:text-white">Women</Link>
            <Link to="/kids" className="text-sm text-gray-300 hover:text-white">Kids</Link>
            <Link to="/custom" className="text-sm text-gray-300 hover:text-white">Build from Scratch</Link>
            <Link to="/cart" className="text-sm text-gray-300 hover:text-white flex items-center">
              <ShoppingCart className="h-5 w-5 mr-1" />
              Cart
            </Link>
            <Link to="/login" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-black border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <Link
              to="/men"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={toggleMenu}
            >
              Men
            </Link>
            <Link
              to="/women"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={toggleMenu}
            >
              Women
            </Link>
            <Link
              to="/kids"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={toggleMenu}
            >
              Kids
            </Link>
            <Link
              to="/custom"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={toggleMenu}
            >
              Build from Scratch
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </div>
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-base font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;