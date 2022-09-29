import React from 'react'
import instaLogo from '../images/insta.png';
import githubLogo from '../images/github.png';


export default function Footer() {
    return (
        <footer>
            <div className=' flex flex-wrap justify-center sm:justify-evenly text-center md:text-start gap-8 sm:gap-0 px-8 pb-2'>
                <div>
                    <h1 className="text-xl font-bold">Email</h1>
                    <p>Shivanshmishra.web@gmail.com</p>
                </div>

                <div className=''>
                    <h1 className='text-xl font-bold'>Follow me on</h1>
                    <div className='flex w-full gap-4 items-center justify-center md:justify-start'>
                        <a href="https://www.instagram.com/Shivansh5039/"
                            rel='noreferrer' referrerPolicy='no-referrer' target='_blank' title='instagram'>
                            <img src={instaLogo} alt="Instagram" width="20px" />
                        </a>
                        <a href="https://github.com/Shivanshm001/"
                            rel='noreferrer' referrerPolicy='no-referrer' target='_blank' title='github'>
                            <img src={githubLogo} alt="Github" width="20px" />
                        </a>
                    </div>
                </div>

                <div className='grid grid-cols-1'>
                    <p>&copy; by Shivansh Mishra</p>
                    <p className='text-sm'>Made with React &amp; TailwindCSS</p>
                </div>
            </div>
        </footer>
    )
}
