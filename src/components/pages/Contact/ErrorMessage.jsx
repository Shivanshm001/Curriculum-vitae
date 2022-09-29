import React from 'react'

export default function ErrorMessage({ error }) {
    // style={{backgroundColor: " rgb(248 113 113)"}}//red
    // style={{backgroundColor: ""}} //green
    return (
        <>
            {
                error === null ? '' :
                    <div className='border border-black text-center font-bold mx-8 mt-8' style={{ backgroundColor: error ? "rgb(248 113 113)" : "rgb(34 197 94)" }}>
                        <h1 className='py-4'>{error ?
                            "Something went wrong, please try again after refreshing." :
                            "Thank you, I will contact you soon."}</h1>
                    </div>
            }
        </>
    )
}