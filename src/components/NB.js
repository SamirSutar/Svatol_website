import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


// bg-rgb(141,218,141)

export default function NB() {
    const [navbar, setNavbar] = useState(false);


    
    return (
        <nav className="w-full sticky top-0 left-0    lg:z-40">
            <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8  backdrop-blur-md  lg:h-14">
                <div>
                       
                    <div className="flex items-center justify-between py-3 md:py-5  md:block ">
                        
                           <a href="javascript:void(0)">
                        <img  className="opacity-100 mt-0 pt-0  h-12 w-20 object-scale-down bg-transparent" src={require('./Screenshot__35_-removebg-preview.png')}></img>
                             
                        </a>  

                        
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                            <div class='flex lg:ml-auto max-lg:w-full'>
        {/* <div
          class='flex xl:w-80 max-xl:w-full rgb(141, 218, 141) px-6 py-3 rounded outline outline-transparent  '>
          <input type='text' placeholder='काहीही शोधा...'
            class='w-full text-sm bg-transparent rounded outline-none pr-2 mr-2 border-1 border-gray-700' />
          <svg className="m-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            class="cursor-pointer fill-gray-900">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </div> */}
      </div>
      <li className="text-gray-900 hover:text-blue-600 font-bold">
                            <Link  to="/">HOME</Link>
                            </li>
                            <li className="text-gray-900 hover:text-orange font-bold">
                            <Link to=""></Link>
                            </li>

                            <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-900 text-[15px] font-bold lg:hover:fill-[#007bff] block'>SERVICES <svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block" viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            class='absolute hidden group-hover:block shadow-lg bg-black px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50'>
            <li class='border-b py-2 '><a href='/Services'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>RESEARCH FINDINGS</a></li>
            <li class='border-b py-2 '><a href='/Services'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>SUCCESS STORIES</a></li>
            <li class='border-b py-2 '><a href='/Services'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>UPCOMING EVENTS</a></li>
            <li class='border-b py-2 '><a href='/Services'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>FEATURED ARTICLES</a></li>
               
            {/* <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Sign up</a></li>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Blog</a></li> */}
          </ul>
        </li>
        <li className="text-gray-900 hover:text-blue-600 font-bold">
                            <Link to="">EVENTS</Link>
                            </li>
                           
                            <li className="text-gray-900 hover:text-blue-600 font-bold">
                            <Link  to=""> Why AYURVEDA</Link>
                            </li>

                            <li className="text-gray-900 hover:text-blue-600 font-bold">
                            <Link  to=""> RESEARCH</Link>
                            </li>
                            <li className="text-gray-900 hover:text-blue-600 font-bold">
                            <Link  to="/Aboutus">ABOUT US</Link>
                            </li>
                            <li>
                            <a href="https://www.youtube.com/" class="text-red-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaYoutube  size={23} />
                    </a>
                   
                    </li>

                    <li>
                            <a href="https://www.youtube.com/" class="text-red-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaInstagram  size={23} />
                    </a>
                   
                    </li>

                    <li>
                            <a href="https://www.youtube.com/" class="text-blue-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaFacebook  size={23} />
                    </a>
                   
                    </li>
                            {/* <li className="text-gray-100 hover:text-blue-600 font-bold">
                            <Link to="/contact">Rooftop</Link>
                            </li> */}
                         
                            {/* <li>
                            <a href="https://www.youtube.com/@dr.bapuraochopade7569/videos" class="text-red-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaYoutube  size={23} />
                    </a>
                    </li> */}
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            
        </nav>
    );
}