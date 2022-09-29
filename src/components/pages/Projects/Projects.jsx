import React,{useState,useEffect} from 'react'

export default function Projects() {
  const [title,setTitle] = useState("Shivansh Mishra");
  useEffect(()=>{
    document.title = title;
    setTitle("Shivansh Mishra | Projects");
  },[title])

  return (
    <>
    <div></div>
    </>
  )
}
