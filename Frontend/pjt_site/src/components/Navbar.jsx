import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import search from '../assets/Search.svg';
import m from '../assets/m.svg';
// import line from '../assets/Line.svg';
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
  return (
    <div className=''>
        <nav className="flex text-white text-2xl font-bold font-['Inter'] justify-center space-x-10 pt-10 pr-10">
        <Link to="/">
                HOME
            </Link>
            <Link to="/forum">
                FORUM
            </Link>
            <Link to="/events">
                EVENTS
            </Link>
            <Link to="/about">
                ABOUT
            </Link>
            <Link to="/help">
                HELP
            </Link>
            <div className="relative">
          <div className="cursor-pointer" onClick={toggleDropdown}>
          <button className="focus:outline-none mt-[-1rem]">
      <img src={m} alt="Profile" style={{ position: "relative", left: "600%" }} />
    </button>
          </div>
          {isDropdownOpen && (
            <div className="absolute left-[580%] right-0 mt-2 bg-white rounded shadow-md">
            <ul className="py-1">
              <li>
                <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Signup</Link>
              </li>
              <li>
                <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</Link>
              </li>
            </ul>
          </div>
          )}
        </div>
        </nav>
      </div>
  )
}

export default Navbar