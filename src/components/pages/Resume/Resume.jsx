import React,{useState,useEffect} from 'react'
// import TextCard from './TextCard'
import CardContent from './CardContent';
import resumeData from './cardData'
import Skills from './Skills';


export default function Resume() {

  const [title,setTitle] = useState("Shivansh Mishra");
  useEffect(()=>{
    document.title = title;
    setTitle("Shivansh Mishra | Resume");
  },[title])
  
  return (
    <main>
      <div className="flex flex-col justify-center items-center mb-16">
        <div className="w-[80%]">
          <h1 className="text-5xl font-bold py-8 ">Resume</h1>
          <hr className='border-t border-t-gray-700 mt-6 mb-3 m-auto' />

          <CardContent resumeData={resumeData} />
          <Skills />

        </div>
      </div>
    </main>
  )
}
