import Image from 'next/image'
import React from 'react'

function BtnPrimary({title}) {
  return (
    <button className='bg-white flex gap-1 items-center text-black border-2 border-black px-4 py-2 rounded-full text-2xl font-bold uppercase cursor-pointer hover:bg-black hover:text-white hover:border-white group duration-300 '>
        {title || "see all"}
        <i className="ri-arrow-right-up-line font-light text-black text-3xl group-hover:text-white"></i>
    </button>
  )
}

export default BtnPrimary
