import Blogs from '@/components/Blogs'
import ContactUs from '@/components/ContactUs'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const HomePage = () => {

  return (

    <>

      <Hero/>
      <Services />
      <Blogs />
      <Testimonials />
      <Team />
      <ContactUs />
    </>
  )
}

export default HomePage