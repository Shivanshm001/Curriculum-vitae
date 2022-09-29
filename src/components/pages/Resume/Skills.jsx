import React from 'react'
import skills from './skillsData';


export default function Skills() {
  return (
    <div className='block w-full pb-8 px-2'>
            <h1 className='text-2xl font-bold mb-5'>Skills</h1>
            <ul className='list-disc px-8 flex flex-col gap-4'>
                {
                    skills.map((skill)=> {
                        return (
                            <div key={skill.sNo}>
                            <li className='font-semibold'>{skill.s}</li>
                            <li className="list-none p-4">{skill.sInfo}</li>
                            </div>
                        )
                    })
                }
            </ul>
          </div>
  )
}
