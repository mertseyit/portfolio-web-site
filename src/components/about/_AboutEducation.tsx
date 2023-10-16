import React from 'react'
import PageHeader from '../general/_PageHeader'
import SubTitle from '../general/_SubTitle'

const AboutEducation = () => {
  return (
    <div className='mt-5'>
      <PageHeader title='Eğitim' />
      <div className='grid grid-cols-3 gap-3 '>
        <div className='w-full bg-opacity-60 bg-white p-2 rounded-lg shadow-md col-span-1'>
          <SubTitle label='Lise' />
          <p>Türkiyede Bir Lise</p>
        </div>
        <div className='w-full bg-opacity-60 bg-white p-2 rounded-lg shadow-md col-span-1'>
          <SubTitle label='Üniversite' />
          <p>Türkiyede Bir Üniversite</p>
        </div>
        <div className='w-full bg-opacity-60 bg-white p-2 rounded-lg shadow-md col-span-1'>
          <SubTitle label='Yüksek Lisans' />
          <p>Türkiyede Bir Üniversite</p>
        </div>
      </div>
    </div>
  )
}

export default AboutEducation