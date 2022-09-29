import React from "react";
import TextCard from "./TextCard";
export default function CardContent({ resumeData }) {
    return (
        <>
            <div className='block w-full py-8 px-2'>
                {
                    resumeData.map((el) => {
                        return (
                            <div key={el.title_name}>
                                <h1 className='text-2xl font-bold'>{el.title}</h1>
                                <TextCard workData={el.workData} />
                                <hr className='border-t border-t-gray-400 my-6 m-auto' />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}