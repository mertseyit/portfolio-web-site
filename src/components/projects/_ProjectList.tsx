import React from 'react'
import p1 from '../../assets/img/projects/1.jpeg'
import p2 from '../../assets/img/projects/2.jpeg'
import p3 from '../../assets/img/projects/3.jpeg'
import p4 from '../../assets/img/projects/4.jpeg'
import p5 from '../../assets/img/projects/5.jpeg'
import p6 from '../../assets/img/projects/6.jpeg'
import p7 from '../../assets/img/projects/7.jpeg'
import ProjectCard from './_ProjectCard'
import PageHeader from '../general/_PageHeader'
const ProjectList = () => {
  return (
    <>
    <PageHeader title='Projeler' />
      <div className='flex flex-wrap gap-5 items-start justify-center'>
        {
          [p1, p2, p3, p4, p5, p6, p7].map((item, key) => (
            <ProjectCard id={key} img={item} key={key} />
          ))
        }
      </div>
    </>
  )
}

export default ProjectList