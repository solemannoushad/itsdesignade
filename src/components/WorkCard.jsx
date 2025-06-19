import Image from 'next/image'
import React from 'react'


const CardTags = ({title}) => {

    return(
        <div className='px-6 text-lg py-2 rounded-full capitalize border-1 border-white'>{title}</div>
    )
}

const CardCategory = ({title}) => {

    return(
        <div className='card-category-pill text-lg capitalize'> {title} </div>
    )
}

function WorkCard() {
  return (
    <div className='flex flex-col w-[70%] h-screen'>
      <div className="work-card-wrapper border-l-1 border-l-slate-200 w-full h-full flex flex-col">
        <div className="work-card-img w-full h-[70%]">
            <Image src={'/images/video-editing.png'} className='w-full h-full object-cover object-top' width={1400} height={1400} alt='Nood Mood' />
        </div>
        <div className="work-card-tags flex w-full p-5 itens-center justify-between">
            <div className="card-tags flex items-center gap-5">
                <CardTags title={"Short Reels"} />
                <CardTags title={"Animation"} />
            </div>
            <div className="card-category flex items-center gap-7">
                <CardCategory title={"Premier Pro"} />
                <CardCategory title={"After Effects"} />
            </div>
        </div>
        <div className="work-card-title flex items-center justify-center py-10">
            <p className='text-6xl font-bold'>Video Editing</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
