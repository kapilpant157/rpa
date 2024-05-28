import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Services from "@/app/services/page";
import Team from "@/app/team/page";
import Testimonials from "@/components/Testimonials";
import Works from "@/app/works/page";
import React from "react";
// import Gallary from './infozone/Gallary/Gallary'
import InfoZone from "@/app/infozone/page";
import Blogs from "@/components/Blogs";






const HomePage = () => {
  return (
    <>
   
        
      <Hero />
     
      <Services />
      <Clients />
      <Blogs />
      <Works />
      <Testimonials />
      <Team />
      <InfoZone />
      {/* <Gallary/> */}
    </>
  );
};

export default HomePage;
