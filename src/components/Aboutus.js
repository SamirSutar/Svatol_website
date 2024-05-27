import React from 'react';
import { Link } from 'react-router-dom';

export default function Aboutus() {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 bg-[#FFF6E7] flex flex-col md:flex-col items-center justify-center">
      <div className="sm:w-1/3 p-10 lg:w-1/2 flex justify-center">
        <div className="image text-center">
          <img className="rounded-full" src={require('./ayurveda-16037170.webp')} alt="Ayurveda"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-left">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            About <span className="text-amber-900">Us</span>
          </h2>
          <p className="text-amber-950 text-justify">
            Located in the heart of the old urban areas, Wardiere offers
            not only a luxuriously relaxing atmosphere but also the
            finest services. We help your skin to rest, rejuvenate your
            beauty, and unwind your body and soul.
          </p>
          <div className="mt-6 flex justify-center  content-center">
            <Link to="/">
              <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-white font-semibold uppercase bg-blue-400 hover:text-black hover:border-blue-500">
                READ MORE
              </button>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}
