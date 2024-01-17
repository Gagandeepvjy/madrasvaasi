// // import React from 'react'
// // import bgland from '../assets/bg.svg'
// // import search from '../assets/Search.svg'
// // import m from '../assets/m.svg'
// // import line from '../assets/Line.svg'
// // const Homepage = () => {
// //   return (
// //     <div className="bg-cover min-h-[642px] h-screen bg-cover bg-center bg-[#01041C] pb-20" style={{backgroundImage: `URL(${bgland})`,backgroundRepeat:"no-repeat"}}>
// //         <div className=''>
// //             <nav className="flex text-white text-2xl font-bold font-['Inter'] justify-end space-x-10 pt-10 pr-10">
// //                 <a href="">
// //                     HOME
// //                 </a>
// //                 <a href="">
// //                     FORUM
// //                 </a>
// //                 <a href="">
// //                     EVENTS
// //                 </a>
// //                 <a href="">
// //                     ABOUT
// //                 </a>
// //                 <a href="">
// //                     HELP
// //                 </a>
// //                 <div className='pl-20 flex space-x-10 mt-[-1rem]'>
// //                     <img src={search} className='w-[35px]'></img>
// //                     <input type="text" className="bg-bottom w-[200px] " style={{ backgroundColor: 'transparent' , backgroundImage: `URL(${line})`, backgroundRepeat:"no-repeat" }} />
// //                     <a href=''>
// //                         <img src={m} ></img>
// //                     </a>
// //                 </div>
// //             </nav>
// //         </div>
// //         <div className='pl-16'>
// //             <div className="pt-20 w-[1022px] leading-[8rem] text-white text-[120px] font-extrabold font-['League Spartan']">DISCOVER CHENNAI</div>
// //             <div className="pl-5 text-white text-[32px] font-light font-['Inter']">Echoing the City's Untold Stories</div>
// //         </div>    
// //     </div>
// //   )
// // }

// // export default Homepage

// // Homepage.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import bgland from '../assets/bg.svg';
// import search from '../assets/Search.svg';
// import m from '../assets/m.svg';
// import line from '../assets/Line.svg';

// const Homepage = () => {
//   return (
//     <div className="bg-cover min-h-[642px] h-screen bg-cover bg-center bg-[#01041C] pb-20" style={{backgroundImage: `URL(${bgland})`, backgroundRepeat:"no-repeat"}}>
//       <div>
//         <nav className="flex text-white text-2xl font-bold font-['Inter'] justify-end space-x-10 pt-10 pr-10">
        //   <Link to="/">
        //     HOME
        //   </Link>
        //   <Link to="/forum">
        //     FORUM
        //   </Link>
        //   <Link to="/events">
        //     EVENTS
        //   </Link>
        //   <Link to="/about">
        //     ABOUT
        //   </Link>
        //   <Link to="/help">
        //     HELP
        //   </Link>
//           <div className='pl-20 flex space-x-10 mt-[-1rem]'>
//             <img src={search} className='w-[35px]'></img>
//             <input type="text" className="bg-bottom w-[200px] " style={{ backgroundColor: 'transparent', backgroundImage: `URL(${line})`, backgroundRepeat:"no-repeat" }} />
//             <Link to="/signup">
//               <img src={m} ></img>
//             </Link>
//           </div>
//         </nav>
//       </div>
//       <div className='pl-16'>
//         <div className="pt-20 w-[1022px] leading-[8rem] text-white text-[120px] font-extrabold font-['League Spartan']">DISCOVER CHENNAI</div>
//         <div className="pl-5 text-white text-[32px] font-light font-['Inter']">Echoing the City's Untold Stories</div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import search from '../assets/Search.svg';
// import m from '../assets/m.svg';
// import line from '../assets/Line.svg';
// import bgland from '../assets/bg.svg';

// const Homepage = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="bg-cover min-h-[642px] h-screen bg-cover bg-center bg-[#01041C] pb-20" style={{ backgroundImage: `URL(${bgland})`, backgroundRepeat: "no-repeat" }}>
//       <div className=''>
//         <nav className="flex text-white text-2xl font-bold font-['Inter'] justify-end space-x-10 pt-10 pr-10">
//             <Link to="/">
//                 HOME
//             </Link>
//             <Link to="/forum">
//                 FORUM
//             </Link>
//             <Link to="/events">
//                 EVENTS
//             </Link>
//             <Link to="/about">
//                 ABOUT
//             </Link>
//             <Link to="/help">
//                 HELP
//             </Link>
//           <div className='pl-20 flex space-x-10 mt-[-1rem]' onBlur={closeDropdown} tabIndex="0">
//             <img src={search} className='w-[35px]'></img>
//             <input type="text" className="bg-bottom w-[200px] " style={{ backgroundColor: 'transparent', backgroundImage: `URL(${line})`, backgroundRepeat: "no-repeat" }} />
//             <div className="relative">
//               <button onClick={toggleDropdown} className="focus:outline-none">
//                 <img src={m} alt="Profile" />
//               </button>
//               {isDropdownOpen && (
//               <div className="absolute top-full right-0 mt-2 bg-white border border-blue-300 rounded shadow-md overflow-hidden">
//                 <div className="px-4 py-2 bg-blue-300 text-white">
//                   <span className="text-lg font-semibold">Welcome!</span>
//                 </div>
//                 <hr className="border-t border-blue-400" />
//                 <Link to="/signup" onClick={console.log("hihihi")} className="block px-3 py-2 text-blue-500 hover:bg-blue-200">
//                   Sign Up
//                 </Link>
//                 <Link to="/login" className="block px-3 py-2 text-blue-500 hover:bg-blue-200">
//                   Login
//                 </Link>
//               </div>
//             )}
//             </div>
//           </div>
//         </nav>
//       </div>
//       <div className='pl-16'>
//         <div className="pt-20 w-[1022px] leading-[8rem] text-white text-[120px] font-extrabold font-['League Spartan']">DISCOVER CHENNAI</div>
//         <div className="pl-5 text-white text-[32px] font-light font-['Inter']">Echoing the City's Untold Stories</div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../assets/Search.svg';
import m from '../assets/m.svg';
import line from '../assets/Line.svg';
import bgland from '../assets/bg.svg';

const Homepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-cover min-h-[642px] h-screen bg-cover bg-center bg-gradient-to-r from-purple-900 to-indigo-800 pb-20" style={{ backgroundImage: `URL(${bgland})`, backgroundRepeat: "no-repeat" }}>
      <div className=''>
        <nav className="flex text-white text-2xl font-bold font-['Inter'] justify-end space-x-10 pt-10 pr-10">
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
                <img src={m} alt="Profile" />
              </button>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-purple-800 rounded shadow-md overflow-hidden">
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
      <div className='pl-16'>
        <div className="pt-20 w-[1022px] leading-[8rem] text-white text-[120px] font-extrabold font-['League Spartan']">DISCOVER CHENNAI</div>
        <div className="pl-5 text-white text-[32px] font-light font-['Inter']">Echoing the City's Untold Stories</div>
      </div>
    </div>
  );
}

export default Homepage;


