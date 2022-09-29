import React,{useState,useEffect} from 'react'
import ContactText from './ContactText';
import ContactForm from './ContactForm';



export default function Contact() {
  //Dynamic title
  const [title, setTitle] = useState("Shivansh Mishra");
  useEffect(() => {
    document.title = title;
    setTitle("Shivansh Mishra | Contact");
  }, [title]);


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <ContactText />
        <ContactForm />
      </div>
        <hr className='border-t border-t-gray-300 w-[90%] m-auto my-24' />
    </>
  )
}
