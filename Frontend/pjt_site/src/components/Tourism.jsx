import React from 'react'
import touris from '../assets/touris.jpg'
import Navbar from './Navbar'
import eventspage from '../assets/eventmenu.svg'
import rect30 from '../assets/rect30.svg'
import rect34 from '../assets/rect34.svg'
import Slice1 from '../assets/Slice1.svg'
import sm from '../assets/sm.svg'
const Tourism = () => {
  return (
    <div className='outer-bg min-h-screen'>
        <div className="bg-cover bg-center bg-gradient-to-r from-purple-900 to-indigo-800 pb-20" style={{ backgroundImage: `URL(${touris})`, backgroundRepeat: "no-repeat" }}>
            <Navbar/>
            <div className="text-white text-[40px] pl-[4rem] pt-[2rem] font-extrabold font-['League Spartan']">EXPLORE FROM POPULAR EXPERIENCES</div>
            <div className="text-white text-[25px] pl-[4rem] font-extralight font-['League Spartan']">See what other travellers like to do, based on ratings and number of bookings.</div>
            <div className='flex justify-center pt-[1rem]'>
              <img src={eventspage} />
            </div>
            <div className="text-white text-[40px] pl-[4rem] pt-[2rem] font-extrabold font-['League Spartan']">TOP ATTRACTIONS IN CHENNAI</div>
            <div className='grid grid-cols-4 justify-items-center pt-[2rem] px-[1rem] gap-y-[3rem]'>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
                <div className='w-[80%] flex relative justify-center items-center'>
                  <img src={rect30}/>
                  <div className='absolute w-[90%] mt-[-11rem]'>
                    <img src={rect34}/>
                  </div>
                  <div className='absolute w-[90%] mt-[9rem]'>
                    <img src={Slice1}/>
                  </div>
                </div>
            </div>
            <div className="pt-[5rem] flex justify-end pr-[4rem]">
              <a href="/tourism_seemore" className="">
                <img src = {sm}/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Tourism