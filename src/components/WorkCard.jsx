import Image from 'next/image'
import React from 'react'


const CardTags = ({title}) => {

    return(
        <div className='px-6 text-lg py-2 rounded-full capitalize border-2 border-white'>{title}</div>
    )
}

const CardCategory = ({title}) => {

    return(
        <div className='card-category-pill text-lg capitalize'> {title} </div>
    )
}

function WorkCard({img, tags, tools, title, objectPosition}) {
  return (
    <div className='flex flex-col w-full md:w-[1000px] min-h-[60vh] md:h-screen flex-shrink-0'>
      <div className="work-card-wrapper border-l-1 border-l-slate-200 w-full h-full flex flex-col">
        <div className="work-card-img w-full h-[40vw] md:h-[70%] min-h-[200px] md:min-h-0">
            <Image src={`/images/${img}`} className={`w-full h-full object-cover object-${objectPosition}`} width={1400} height={1400} alt={title} />
        </div>
        <div className="work-card-tags flex w-full p-5 items-center justify-between flex-wrap gap-2 md:gap-0">
            <div className="card-tags flex items-center gap-2 md:gap-4 flex-wrap">
                {
                    tags.map((tag, index) => {
                        return <CardTags key={index} title={tag} />
                    })
                }
            </div>
            <div className="card-category flex items-center gap-4 md:gap-7 flex-wrap">
                {
                    tools.map((tool, index) => {
                        return <CardCategory key={index} title={tool} />
                    })
                }
            </div>
        </div>
        <div className="work-card-title flex items-center justify-center py-6 md:py-10">
            <p className={`text-2xl md:text-6xl font-medium font-hero`}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
