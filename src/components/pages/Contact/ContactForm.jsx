import React, { useState } from 'react'
import axios from 'axios';
import TextInput from './TextInput'
import ErrorMessage from './ErrorMessage';

function SendingMessage() {
    return (
        <>
            <div className='border border-black bg-green-400 text-center font-bold mx-8 mt-8 -mb-8'>
                <h1 className='py-4'>Sending...</h1>
            </div>
        </>
    )
}
export default function ContactForm() {

//Form Data 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });


//For handling input
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

//for handling form submit
    const [isError, setIsError] = useState(null);
    const [sending, setSending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailjsParams = {
            service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            user_id: process.env.REACT_APP_EMAILJS_PUBLIC_ID,
            template_params: {
                to_name: "Shivansh Mishra",
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            }
        }

        async function sendFormToEmailjs() {
            try {
                const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailjsParams)
                if(response.status !== 200) setIsError(true)
                setIsError(false)
            } catch (error) {
                console.log(error);
            }
        }
        sendFormToEmailjs().then(()=>{
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                {sending && <SendingMessage />}
                {!sending && <ErrorMessage error={isError} />}

                {/* Form  */}
                <div className='flex justify-center items-center min-h-screen'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>

                        <TextInput type="text" name="name" id="name" value={formData.name} label="Name"
                            inputAction={handleInput} r={true}
                        />

                        <TextInput
                            type="text" name="subject" id="subject" value={formData.subject} label="Subject"
                            inputAction={handleInput} r={true}
                        />

                        <TextInput type="email" name="email" id="email" value={formData.email} label="Email"
                            inputAction={handleInput} r={true}
                        />


                        <div className="flex flex-col gap-1 sm:col-span-2">
                            <label htmlFor="message" className="text-xs font-semibold ml-1 mt-4">Message</label>
                            <textarea value={formData.message} id="message" name="message" onChange={handleInput}
                                className="border border-black p-2"
                            />
                        </div>


                        <div className='flex justify-center sm:justify-end items-center sm:col-span-2 sm:pr-4'>
                            <button className='transition ease-in-out duration-100 border border-black px-11 cursor-pointer py-12 bg-green-500 rounded-full font-semibold hover:bg-white active:bg-white '>Send
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}