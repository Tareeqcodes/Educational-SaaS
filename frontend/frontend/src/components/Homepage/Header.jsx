import React from 'react';

const Header = () => { 
  return (
    <section className=" py-20 md:py-42 px-5 md:px-10 mx-0 text-center items-center justify-center">
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center items-center justify-center py-2 md:pt-20'>
     <h1 className=' font-ubuntu font-bold text-3xl text-blue-700 text-justify max-w-80 md:max-w-80 leading-normal tracking-tighter '><span className='text-orange-600'>Empowering</span> Education for a Digital World.</h1>

     <p className='font-ubuntu text-xl text-justify tracking-tighter text-black'>Explore a world of knowledge and campus services designed to support both students and instructors. From PDFs to rentals, find everything you need to succeed.</p>
     </div>
    </section>
  );
};

export default Header;
