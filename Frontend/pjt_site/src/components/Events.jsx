// import React, { useState, useEffect } from 'react';
// import event from '../assets/events.svg'
// import Navbar from './Navbar'
// import axios from 'axios';


// const Events = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch data from Django API when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/events/');
//         setEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="bg-cover min-h-[642px] h-screen bg-cover bg-center bg-gradient-to-r from-purple-900 to-indigo-800 pb-20" style={{ backgroundImage: `URL(${event})`, backgroundRepeat: "no-repeat" }}>
//         <Navbar/>
//         <div className="w-[901px] text-white text-[120px] pl-[3rem] pt-[3rem] font-extrabold font-['League Spartan']">TRENDING EVENTS</div>
//         <div className="w-[991px] h-[0px] border-4 border-white ml-[3rem]"/>
//         <div className="overflow-y-auto h-[400px] mt-8">
//         {events.map((event) => (
//           <div key={event.Event_Title} className="flex items-center mb-4">
//           <img src={event.Image_Source} alt={event.Event_Title} className="w-20 h-20 object-cover rounded mr-4" />
//           <div>
//             <h2 className="text-white text-lg font-bold">{event.Event_Title}</h2>
//             <p className="text-white">{event.Event_Details}</p>
//             <p className="text-white">Location: {event.Location}</p>
//             <p className="text-white">Date: {event.start_date} to {event.end_date}</p>
//             <a href={event.Event_Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
//           </div>
//         </div>
//         ))}
//         </div>

//     </div>
//   )
// }

// export default Events

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import axios from 'axios';
import './style.css';
import bgevents from '../assets/pic2.jpg'

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from Django API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/events/');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="outer-bg min-h-screen overflow-hidden">
      <div className="bg-cover bg-center bg-gradient-to-r from-purple-900 to-indigo-800 pb-20" style={{ backgroundImage: `URL(${bgevents})`, backgroundRepeat: "no-repeat" }}>
        <Navbar />
        <div className="w-[901px] text-white text-[120px] pl-[3rem] pt-[3rem] font-extrabold font-['League Spartan']">TRENDING EVENTS</div>
        <div className="w-[991px] h-[0px] border-2 border-white ml-[3rem]" />
        <div className="mt-8 flex justify-center items-center flex-col overflow-hidden max-h-[70vh]">
          <div className="overflow-y-auto custom-scrollbar" style={{ textAlign: 'left' }}>
            {events.map((event) => {
              // console.log(event); // Log the event object to the console for debugging
              return (
                <div key={event.Event_Title} className="flex items-center mb-4 w-[80%]">
                  <img src={event.Image_Source} alt={event.Event_Title} className="w-40 h-50 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-white text-lg font-bold">{event.Event_Title}</h2>
                    <p className="text-white">{event.Event_Details}</p>
                    <p className="text-white">Location: {event.Location}</p>
                    <p className="text-white">Date: {event.start_date} to {event.end_date}</p>
                    <button
                      onClick={() => window.open(event.Event_Link, '_blank')}
                      className="text-black-500 hover:bg-black hover:text-white bg-white border-blue-500 px-4 py-2 rounded focus:outline-none focus:border-blue-700"
                    >
                      Book Now!
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default Events;
