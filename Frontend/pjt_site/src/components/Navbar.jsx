import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import search from '../assets/Search.svg';
import m from '../assets/m.svg';
// import line from '../assets/Line.svg';
import underline from '../assets/underline.svg';
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className=''>
        <nav className="flex text-white text-2xl font-bold font-['Inter'] justify-center space-x-10 pt-10 text-front">
            <Link to="/" className="relative scale-[100%] hover:transition-all hover:scale-[110%] inline-block hover:after:absolute hover:after:block hover:after:w-full hover:after:h-0.5 rounded-[60%] hover:after:bg-red-300 hover:after:mt-0">
                HOME
            </Link>
            <Link to="/forum" className="relative scale-[100%] hover:transition-all hover:scale-[110%] inline-block hover:after:absolute hover:after:block hover:after:w-full hover:after:h-0.5 rounded-[60%] hover:after:bg-red-300 hover:after:mt-2px">
                FORUM
            </Link>
            <Link to="/events" className="relative scale-[100%] hover:transition-all hover:scale-[110%] inline-block hover:after:absolute hover:after:block hover:after:w-full hover:after:h-0.5 rounded-[60%] hover:after:bg-red-300 hover:after:mt-2px">
                EVENTS
            </Link>
            <Link to="/about" className="relative scale-[100%] hover:transition-all hover:scale-[110%] inline-block hover:after:absolute hover:after:block hover:after:w-full hover:after:h-0.5 rounded-[60%] hover:after:bg-red-300 hover:after:mt-2px">
                ABOUT
            </Link>
            <Link to="/tourism" className="relative scale-[100%] hover:transition-all hover:scale-[110%] inline-block hover:after:absolute hover:after:block hover:after:w-full hover:after:h-0.5 rounded-[60%] hover:after:bg-red-300 hover:after:mt-2px">
                TOURISM
            </Link>
            <div className="absolute right-6 mt-[-0.5rem]">
              <a className="" onClick={toggleDropdown}>
                <div className="focus:outline-none">
                  <img src={m} alt="Profile" className="scale-[100%] hover:scale-[110%] right-0 hover:right-1 hover:transition-all"style={{ position: "relative"}} />
                </div>
              </a>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-md">
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