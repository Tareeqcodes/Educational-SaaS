import React from 'react';

const Header = () => { 
  return (
    <section className="bg-peach text-white py-24 lg:py-42 px-5 mx-0 text-center items-center justify-center ">
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center m-auto'>
     <h1 className=' font-ubuntu font-bold text-3xl text-blue-700 text-justify sm:w-full md:w-full lg:w-96 leading-normal'><span className='text-orange-600'>Empowering</span> Education for a Digital World.</h1>

     <p className='font-ubuntu text-xl'>Explore a world of knowledge and campus services designed to support both students and instructors. From PDFs to rentals, find everything you need to succeed.</p>
     </div>
    </section>
  );
};

export default Header;
