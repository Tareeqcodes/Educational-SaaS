import React from 'react';

const Header = () => { 
  return (
     <div className='grid grid-cols-1 md:grid-cols-2 pt-20 md:py-40 px-5 md:px-20  text-center items-center justify-center'>
     <h1 className=' font-ubuntu font-bold text-3xl text-blue-700 text-justify max-w-80 md:max-w-80 leading-normal tracking-tighter '><span className='text-orange-600'>Empowering</span> Education for a Digital World.</h1>

     <p className='font-ubuntu text-xl text-justify tracking-tighter text-black'>Explore a world of knowledge and campus services designed to support both students and instructors. From PDFs to rentals, find everything you need to succeed.</p>
     </div>
  );
};

export default Header;
