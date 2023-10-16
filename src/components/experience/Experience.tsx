import React from 'react'
import PageHeader from '../general/_PageHeader'
import ExperienceCard from './_ExperinceCard'
const experinceData = [
  {
    title:"Deneyim 1",
    desc:"Eu enim laborum exercitation do sint laboris Lorem. Anim aliquip culpa labore sunt minim incididunt est tempor et anim culpa et. Ullamco fugiat laborum fugiat elit irure ad magna elit do fugiat. ",
    date:"12/12/2023",
    year:0
  },
  {
    title:"Deneyim 2",
    desc:"Eu enim laborum exercitation do sint laboris Lorem. Anim aliquip culpa labore sunt minim incididunt est tempor et anim culpa et. Ullamco fugiat laborum fugiat elit irure ad magna elit do fugiat. ",
    date:"5/8/2022",
    year:1
  },
  {
    title:"Deneyim 3",
    desc:"Eu enim laborum exercitation do sint laboris Lorem. Anim aliquip culpa labore sunt minim incididunt est tempor et anim culpa et. Ullamco fugiat laborum fugiat elit irure ad magna elit do fugiat. ",
    date:"15/8/2016",
    year:6
  },
  {
    title:"Deneyim 4",
    desc:"Eu enim laborum exercitation do sint laboris Lorem. Anim aliquip culpa labore sunt minim incididunt est tempor et anim culpa et. Ullamco fugiat laborum fugiat elit irure ad magna elit do fugiat.",
    date:"15/8/2012",
    year:4
  }
]
const Experience = () => {
  return (
    <div>
      <PageHeader title='Deneyimim' />
      <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
        {
          experinceData.map(item => (
            <React.Fragment key={item.title}>
              <ExperienceCard date={item.date} desc={item.desc} title={item.title} year={item.year}/>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Experience