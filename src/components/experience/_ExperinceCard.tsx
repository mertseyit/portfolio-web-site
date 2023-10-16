import React from 'react'

const ExperiencCard = ({title, desc, date, year}:{title:string, desc:string, date:string, year:number}) => {
  return (
    <div className='p-3 border rounded-md bg-opacity-60 bg-white'>
      <h1 className='text-2xl mb-4 font-semibold'>{title}</h1>
      <p className='text-sm mb-4'>{desc}</p>
      <div className='flex justify-between items-center'>
        <span className='italic text-xs'>{date}</span>
        {year === 0 ? (<><span className='text-green-500 text-xs'>Halen Devam Ediyorum</span></>) : (<><span className='text-xs text-orange-500'>{year} Yıl Deneyim</span></>) }
      </div>
    </div>
  )
}

export default ExperiencCard