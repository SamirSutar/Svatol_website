import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Doctors_Img() {
  return (
    <><div className='bg-[#FFF6E7]'>
      <div className='mt-24 '>
        <h1 className='text-4xl text-center mt-10 font-bold'>Meet our Doctors</h1>
        <h1 className='text-center mt-5'>
          Our focus is on, offering a wide range of programs and events aimed at fostering a deeper understanding and appreciation of Ayurveda.
        </h1>
      </div>

      <div className='lg:columns-3 lg:gap-5 lg:justify-evenly  lg:mt-14 lg:mb-20  w-full flex flex-col lg:flex-row  items-center lg:max-w-7xl'>
        <div className='flex flex-col items-center mt-10 lg:mt-0'>
          <img
            src={require('./WhatsApp Image 2024-04-25 at 8.54.48 PM.jpeg')}
            alt=""
            className="lg:w-40 w-72 rounded-full"
          />
          <h1 className='lg:mt-10 mt-5'>Samir</h1>
          <h2 className=''>Ayurveda Practitioner</h2>
          <Link className="">
            <FaInstagram color='#E1306C' className="mt-2" size={30} />
          </Link>
        </div>
        <div className='flex flex-col items-center mt-10 lg:mt-0 lg:ml-14'>
          <img
            src={require('./Screenshot (34).png')}
            alt=""
            className="lg:w-40 w-72 rounded-full"
          />
          <h1 className='lg:mt-10 mt-5'>Aditi</h1>
          <h2 className=''>Ayurveda Practitioner</h2>
          <Link className="">
            <FaInstagram color='#E1306C' className="mt-2" size={30} />
          </Link>
        </div>
        <div className='flex flex-col items-center mt-10 lg:mt-0 lg:ml-14'>
          <img
            src={require('./d05ac2e3-14f4-4d48-808e-a910650ae371.jpg')}
            alt=""
            className=" lg:w-40 w-72 rounded-full"
          />
          <h1 className='lg:mt-10 mt-5'>Prajwal</h1>
          <h2 className=''>Ayurveda Practitioner</h2>
          <Link className="">
            <FaInstagram color='#E1306C' className="mt-2" size={30} />
          </Link>
        </div>
      </div>
      </div>
    </>
  )
}
