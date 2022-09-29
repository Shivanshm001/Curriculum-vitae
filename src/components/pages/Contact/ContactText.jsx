import React from 'react';

const Text = ({head,body})=>{
return(
    <div>
    <h1 className={`font-bold ${head === "Contact"?'text-4xl':'text-lg'}`}>{head}</h1>
    <p className='font-light pl-0.5'>{body}</p>
    </div>
)
}
export default function ContactText(){
    return(
        <>
        <div id='text' className='flex justify-center items-center  min-h-screen'>
          <div className='flex flex-col gap-6'>
           
           <Text
            head="Contact"
            body="Looking forward to hear from you"
            />

            <Text
            head="Email"
            body="Shivanshmishra.web@gmail.com"
            />
          </div>
        </div>
        </>
    )
}