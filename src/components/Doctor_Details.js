import React from 'react';

function Doctor_Details() {
  return (
    <div className="bg-[#FFF6E7] flex justify-center py-4 h-[90vh]">
      <div className="w-[95%] flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={require('./a1.jpeg')} className="object-cover w-full h-full" alt="Doctor" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center align-top  p-4 md:pl-14">
          <div> 
            <h1 className="text-sm">About me</h1>
            <h1 className="font-serif text-3xl mt-4">Dr Adesh</h1>
            <h1 className="">BAMS, MD (Ayurveda), IMS-BHU, Gold Medalist</h1>
            <h1 className="lg:flex">MBA, Indian School of Business</h1>
          </div>
          <div className="mt-4 md:mt-10">
            <p className="text-sm text-balance">Hi! I'm Dr Anam. I completed both my Bachelor's and my Master's at <p className='font-bold '> Institute of Medical Sciences - Banaras Hindu University.</p> I also hold a Diploma in Yoga from the same university.</p>
            <p className="text-sm mt-4 md:mt-10">Besides being a practising doctor, I am a researcher in the field of mental health and an author in the field of Diet and Dietetics.</p>
          </div>
          <div>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Know more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Details;