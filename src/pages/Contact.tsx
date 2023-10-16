import React from 'react'
import Spacer from '../components/general/Spacer'
import Contact from '../components/contact/Contact'
import ContactInformation from '../components/contact/_ContactInformation'

const ContactPage = () => {
  return (
    <Spacer>
      <Contact />
      <ContactInformation />
    </Spacer>
  )
}

export default ContactPage