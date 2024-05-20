import React from 'react'
import Vision from './Vision'
import Contactus from './Contactus'
import Services from './Services'
import Paragraph from './Paragraph'
import Aboutus from './Aboutus'
import Startup from './Startup'
import Hero1 from './Hero1'
import Vision1 from './Vision1'
import Testhero from './Herosection'
import Apointment from './Apointment'
import Footer from './footer'
export default function Home() {

  return (
    <div className='bg-[#FFF6E7]'>

      <Testhero/>
      {/* <Vision1/> */}
      {/* <Vision/> */}
      
      <Hero1/>
     
      <Contactus/>
      {/* <Services/> */}
      <Paragraph/>
      <Aboutus/>
     
      {/* <Apointment/> */}
      <div className='bottom-0 '>
      <Footer />
      </div>

    </div>
  )

}
