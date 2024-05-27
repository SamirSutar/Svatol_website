
import React from 'react';

function Services() {
  return (
    <div className='flex flex-wrap justify-center items-center gap-4 p-4 mt-20'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col '>
        <img src={require('./Service_Logo/Oncology.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
        <h1 className='text-black text-xl text-center mt-5'>Oncology</h1>
        </div>

        <div className='h-40 w-40 rounded-full bg-[#90EE90] flex flex-col'>
       
        <img src={require('./Service_Logo/Dermatology.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
        <h1 className='text-black text-xl text-center mt-5'>Dermatology</h1>
        </div>
       
        <div className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col '>
        <img src={require('./Service_Logo/General_Physician.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
        <h1 className='text-black text-xl text-center mt-5'>Oncology</h1>
        </div>
        </div>
   
     
      <div className='flex flex-col  justify-center ml-20 mr-20 drop-shadow-2xl'>
        <img
          src={require('./a1.jpeg')}
          alt="image 1"
          className="object-scale-down  max-h-96 max-w-full rounded-lg  "
        />
        <button className='justify-center mt-7 p-2 font-sans font-bold uppercase text-[#FFF6E7] hover:text-[#7B553C] hover:bg-[#90EE90] bg-[#2E8B57]  rounded-lg drop-shadow-mds'>
            Book appointment
        </button>
      </div>

      <div className='flex flex-col items-center space-y-4 '>
        <div className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'>
        <img src={require('./Service_Logo/Preventive_Health_Checkup.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
        <h1 className='text-black text-xl text-center mt-5'>Health</h1>
        <h1 className='text-black text-xl text-center '>Checkup</h1>
        </div>
        <div className='h-40 w-40 rounded-full bg-[#90EE90] flex flex-col'>
        <img src={require('./Service_Logo/Panchkarma.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
        <h1 className='text-black text-xl text-center mt-5'>Panchkarma</h1>
        </div>
        <div className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'>
        <img src={require('./Service_Logo/Annual_Routin_Check.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
        <h1 className='text-black text-xl text-center mt-5'>Annual Routin</h1>
        <h1 className='text-black text-xl text-center '>Check</h1>
        </div>
      </div>
    </div>
  );
}

export default Services;

