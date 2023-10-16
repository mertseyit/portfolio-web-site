import React from 'react'
import PageHeader from '../general/_PageHeader'
import AboutParagraph from './_AboutParagraph'
import AboutEducation from './_AboutEducation'

const About = () => {
  return (
    <>
      <PageHeader title='Hakkımda' />
      <AboutParagraph />
      <AboutEducation />
    </>
  )
}

export default About