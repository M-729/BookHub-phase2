import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {
  return (
    <nav className="bg-[#2c3e50] py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link 
            to="/" 
            className="text-white text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors duration-300"
          >
            📚 BookHub Store
          </Link>
          <div className="flex items-center gap-4">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 list-none m-0 p-0 text-center">
              <li>
                <Link 
                  to="/" 
                  className="text-white no-underline hover:text-blue-400 transition-colors duration-300 px-4 py-2 block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard" 
                  className="text-white no-underline hover:text-blue-400 transition-colors duration-300 px-4 py-2 block"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/books" 
                  className="text-white no-underline hover:text-blue-400 transition-colors duration-300 px-4 py-2 block"
                >
                  Books Zone
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white no-underline hover:text-blue-400 transition-colors duration-300 px-4 py-2 block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white no-underline hover:text-blue-400 transition-colors duration-300 px-4 py-2 block"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <Link to="/cart" className="text-white no-underline hover:text-blue-400 transition-colors duration-300 px-3 py-2 block">
                Cart
              </Link>
              {onLogout && (
                <button onClick={onLogout} className="bg-red-500 text-white px-3 py-2 rounded">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;