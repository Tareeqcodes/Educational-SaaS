import React from 'react';

const Header = () => { 
  return (
    <section className="bg-peach py-40 mx-0 text-center items-center justify-center ">
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
     <h1 className='text-4xl font-ubuntu text-blue-700'><span className='text-orange-600'>Empowering</span> Education for a Digital World.</h1>

     <p>Explore a world of knowledge and campus services designed to support both students and instructors. From PDFs to rentals, find everything you need to succeed.</p>
     </div>
    </section>
  );
};

export default Header;
