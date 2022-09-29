import React from 'react'

export default function HomeRoundButtons({ linkedto }) {

  return (
    <div className='flex gap-8 flex-wrap justify-evenly items-center'>
      <div className={`transition ease-in-out duration-150 border border-black px-10 py-14 rounded-full font-semibold hover:bg-white hover:scale-110 active:bg-white active:scale-110 ${linkedto === "Resume" ? "bg-yellow-400" :
        linkedto === "Projects" ? "bg-orange-400" : "bg-green-400"}`}>{linkedto}</div>
    </div>
  )
}
