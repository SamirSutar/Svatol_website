import React from 'react'
import { IoIosCall, IoIosMail } from "react-icons/io";
import {  HiLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Footer() {
  return (<>
     <div className='h-1 w-7xl bg-[#7B553C] '></div>
    <footer class="bg-[#FFF6E7] font-sans dark:bg-gray-900 ">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
           
             <div className='flex-col'>
                <div>
                {/* <img  className="opacity-100  h-24 w-30 object-scale-down h" src={require('./Screenshot__35_-removebg-preview.png')}></img> */}
                </div>

                <p class="text-sm text-gray-800 font-sans text-sm flex-wrap mt-5 mr-8">
                SVATOL Ayurveda Healthcare and Research Pvt. Ltd.
                  is captivated by the profound wisdom of the
                      Ayurvedic System of Medicine, fueling our
                      impassioned quest to revolutionize the healthcare
                      sector. Our unwavering commitment is directed
                    towards the delivery of healthcare services that are
                   not only efficient, effective, and affordable..
                </p>

               
            </div>
            
            <div>
                <p class="font-semibold text-gray-800 dark:text-white lg:ml-5">Connect Us</p>
                 
                <div class="flex flex-col items-start mt-5 space-y-2">
                  <div className='flex '>
                    
                    <div className='bg-[#7B553C] h-8 w-8 rounded-full mr-3 mt-1 '>
                    <Link to="tel:+7517008893">
                      
                    <IoIosCall size={15} color="white" className='bg-transparent mt-2 ml-2 '/> </Link>
                    </div>
                    <Link to="tel:+7517008893">
                      <div className='flex-col'>
                        <p class="text-[#7B553C] font-sans text-sm font-semibold">Call Us</p>
                        <p class="text-gray-800 text-sm font-sans mt-1">+91 99999 99999</p>
                    </div>
                    </Link>
                  </div>
                  <div className='flex mt-1'>
                    <div className='bg-[#7B553C] h-8 w-8 rounded-full mr-3 mt-1 '>
                      <Link to="mailto:svatol@gmail.com">
                    <IoIosMail size={15} color="white" className='bg-transparent mt-2 ml-2 '/>
                    </Link>
                    </div>
                    <Link to="mailto:svatol@gmail.com">
                      <div className='flex-col'>
                        <p class="text-[#7B553C] font-sans text-sm font-semibold">Mail Us</p>
                        <p class="text-gray-800 text-sm font-sans mt-1">svatol@gmail.com</p>
                        
                    </div>
                    </Link>
                  </div>
                  <div className='flex mt-1'>
                  <div className='bg-[#7B553C] h-8 w-8 rounded-full mr-3 mt-1 '>
                    <Link to="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10256.751161022528!2d74.03772634136008!3d18.353686311448627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e56bb1badcd5%3A0xb7e4c523f1a4ef22!2sBhaskar%20Ayurved%20Chikitsalaya!5e0!3m2!1sen!2sin!4v1715773752416!5m2!1sen!2sin">
                    <HiLocationMarker size={15} color="white" className='bg-transparent mt-2 ml-2 mr-3 '/>
                    </Link>
                    </div>
                    <Link to="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10256.751161022528!2d74.03772634136008!3d18.353686311448627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e56bb1badcd5%3A0xb7e4c523f1a4ef22!2sBhaskar%20Ayurved%20Chikitsalaya!5e0!3m2!1sen!2sin!4v1715773752416!5m2!1sen!2sin">
                      <div className='flex-col'>
                        <p class="text-[#7B553C] font-sans text-sm font-semibold">Visit Us</p>
                        <p class="text-gray-800 text-sm font-sans mt-1 flex-wrap">Bhaskar Ayurved Chikitsalaya
                      Saichaya L/4, in front of Jaydeep Mangal Karyalaya, Shikshak Society, Saswad, Maharashtra 412301</p>
                    </div>
                    </Link> 
                  </div>
                    
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                  <Link to="/"> <p class="text-gray-600 text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 font-bold">HOME </p></Link> 
                 <Link to="/what_we_stands_for">    <p class="text-gray-600 text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 font-bold">WHAT WE STAND FOR</p></Link> 
                   <Link to="/Aboutus">  <p class="text-gray-600 text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 font-bold">ABOUT US</p></Link> 
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Upcoming Events</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-900  text-sm font-semibold font-sans">27-29 September, 8:00 AM - 05:00 AM</p>
                    <p class="text-gray-900 text-sm font-sans ">Svatol Foundation Presents- Mega Festival of Ayurveda 2024</p>
                <img  className="opacity-100  h-36 w-30 object-scale-down h ml-5 " src={require('./Logo.png')}></img>
  
                </div>
            </div>
            <div class="sm:flex sm:items-center sm:justify-between">
            
            <div class="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                
            </div>
        </div>

           

            
        </div>
        
        {/* <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" /> */}
        
        
       
    </div>
    {/* <div className='bg-[#7B553C] w-lg h-10    '> */}
 <p class="font-sans p-8 text-start text-black md:text-center md:text-md md:p-4   ">© 2023 You Company Inc. All rights reserved.</p>
{/* </div> */}
</footer>
 
</>
  )
}

export default Footer
