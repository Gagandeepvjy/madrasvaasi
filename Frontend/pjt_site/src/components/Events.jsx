import React from 'react'
import event from '../assets/events.svg'
import Navbar from './Navbar'
const Events = () => {
  return (
    <div className="bg-cover min-h-[642px] h-screen bg-cover bg-center bg-gradient-to-r from-purple-900 to-indigo-800 pb-20" style={{ backgroundImage: `URL(${event})`, backgroundRepeat: "no-repeat" }}>
        <Navbar/>
        <div className="w-[901px] text-white text-[120px] pl-[3rem] pt-[3rem] font-extrabold font-['League Spartan']">TRENDING EVENTS</div>
        <div className="w-[991px] h-[0px] border-4 border-white ml-[3rem]"/>
        <div style={{ height: '200px', overflowY: 'scroll' }}>
            <p>Scrollable content here</p>
        </div>

    </div>
  )
}

export default Events