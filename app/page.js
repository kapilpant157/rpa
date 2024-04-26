import Blogs from '@/components/Blogs'
import Clients from '@/components/Clients'
import ContactUs from '@/components/ContactUs'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Works from '@/components/Works'
import React from 'react'

const HomePage = () => {

  return (

    <>

      <Hero/>
      <Services />
      <Clients/>
      <Blogs />
      <Works/>
      <Testimonials />
      <Team />
      <ContactUs />
    </>
  )
}

export default HomePage