import React from 'react'

export default function TextCard({ workData }) {
    return (
        <>
            {
                workData.map((el) => {
                    return (
                        <div className='flex justify-center gap-8 flex-col w-[80%] my-16' key={el.iNo}>
                            <div className="flex w-full">
                                <p className='font-bold text-gray-700 mr-2 align-baseline'>{el.startYear}-{el.endYear}</p>
                                <h1 className='text-lg font-bold'>{el.workedAs}</h1>
                            </div>
                            <p className='px-4 sm:px-16 lg:px-32'>{el.workInfo} </p>
                        </div>
                    )
                })
            }
        </>
    )
}


// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit eaque repudiandae iusto quis animi praesentium cumque, est, soluta reprehenderit exercitationem ducimus laborum dolorem magni. Ipsum pariatur accusamus quis odio illo.

//