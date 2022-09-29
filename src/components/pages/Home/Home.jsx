import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import shivanshImg from '../../../images/shivansh.jpg'
import HomeRoundButtons from './HomeRoundButtons'
import HomeTextContent from './HomeTextContent'

export default function Home() {
  const [title,setTitle] = useState("Shivansh Mishra");
  useEffect(()=>{
    document.title = title;
    setTitle("Shivansh Mishra | Home");
  },[title])
  
  return (
    <>
    <hr className='border-t border-t-gray-300 w-[90%] m-auto my-24' />

    <main className='flex justify-center items-center min-h-screen ' >
      
      <div className='grid grid-cols-1 md:grid-cols-2 my-8 md:my-0'>
        <div className="flex justify-center md:justify-end items-center p-4 sm:p-2">
          <div className='imgContainer md:w-[75%] rounded-full overflow-hidden md:mr-8'>
            <img src={shivanshImg} alt="Shivansh Mishra" />
          </div>
        </div>
        <div className="grid grid-cols-1">

          <HomeTextContent />
          
          <div className="link-container flex flex-wrap gap-8 justify-center items-center sm:pl-4">
            <Link to="/resume"><HomeRoundButtons linkedto="Resume" /></Link>
            {/* <Link to="/projects"><HomeRoundButtons linkedto="Projects" /></Link> */}
            <Link to="/contact"><HomeRoundButtons linkedto="Contact" /></Link>
          </div>
        </div>
      </div>
    </main>

    <hr className='border-t border-t-gray-300 w-[90%] m-auto my-24' />
    </>
  )
}
