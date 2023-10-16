import React from 'react'

const PageHeader = ({title}:{title:string}) => {
  return (
    <h2 className='text-3xl text-gray pb-2 w-full border-b-4 border-[#5B0888] mb-10'>{title}</h2>
  )
}

export default PageHeader