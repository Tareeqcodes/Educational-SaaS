import React from 'react';

const Header = () => { 
  return (
     <div className=' pt-40 md:py-40 px-5 md:px-10 text-center  items-center justify-around'>
     <h1 className=' font-ubuntu font-bold text-3xl text-justify max-w-80 md:max-w-full leading-normal tracking-tighter'>Empowering Education for a <span className='bg-green-600 p-1'>Digital World.</span></h1>

     {/* <p className='font-ubuntu text-xl text-justify tracking-tighter '>Explore a world of knowledge and campus services designed to support both students and instructors. From PDFs to rentals, find everything you need to succeed.</p> */}
     </div>
  );
};

export default Header;
