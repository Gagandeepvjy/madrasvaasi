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
          <div className='relative group' onBlur={closeDropdown} tabIndex="0">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
              {/* <img src={search} className='w-[35px]'></img>
              <input type="text" className="bg-bottom w-[200px] " style={{ backgroundColor: 'transparent', backgroundImage: `URL(${line})`, backgroundRepeat: "no-repeat" }} /> */}
              <button className="focus:outline-none mt-[-1rem]">
                <img src={m} alt="Profile" style={{position: "relative", left: "650%"}} />
              </button>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-[600%] mt-2 bg-white border border-purple-800 rounded shadow-md overflow-hidden">
                <div className="px-4 py-2 bg-purple-800 text-white">
                  <span className="text-lg font-semibold">Welcome!</span>
                </div>
                <hr className="border-t border-purple-800" />
                <Link to="/signup" className="block px-3 py-2 text-purple-800 hover:bg-purple-200" onClick={(e) => e.stopPropagation()}>
                  Sign Up
                </Link>
                <Link to="/login" className="block px-4 py-2 text-purple-800 hover:bg-purple-200" onClick={(e) => e.stopPropagation()}>
                  Login
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
  )
}

export default Navbar