import React from 'react'
import bg from '../assets/newsbg.svg'
import '@fontsource/league-spartan'
import Marquee from "react-fast-marquee"
import Navbar from './Navbar'
import forumrect from '../assets/forumrect.svg'
import line from '../assets/Line2.svg'
import rect from '../assets/Rectangle10.svg'
const Forum = () => {
  return (
    <div className="bg-cover min-h-[642px] h-screen bg-center bg-[#01041C]" style={{backgroundImage: `URL(${bg})`,backgroundRepeat:"no-repeat"}}>
        <Navbar/>
        <div>
            <div className="text-[110px] text-white mt-[2%] pl-[5%] absolute" style = {{fontWeight: 1000}}> LATEST NEWS</div>
        </div>
        <Marquee speed={120} className=' mt-[13%]'>
            <div className='pl-20'> {/*edit inside div for content */}
              <img src={forumrect}/>
            </div>
            <div className='pl-20'>
              <img src={forumrect}/>
            </div>
            <div className='pl-20'>
              <img src={forumrect}/>
            </div>
            <div className='pl-20'>
              <img src={forumrect}/>
            </div>
        </Marquee>
        <img src={line} className='pt-[2%] pl-[5%]'/>
        <div className='pl-[5%] pt-[2%]'> {/*community forum*/}
          <img src={rect}/>
        </div>
    </div>
  )
}

export default Forum