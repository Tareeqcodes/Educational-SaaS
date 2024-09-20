import React from 'react';

const Header = () => { 
  return (
    <section className="bg-peach py-40 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-16 mx-auto text-center items-center justify-center ">
     <div>
     <h1 className='text-4xl text-blue-700 mb-5'><span className='text-orange-600'>Lorem ipsum </span>dolor sit amet consectetur adipisicing elit.</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem consequatur alias nostrum officia accusantium provident quia odit. Adipisci, et?</p>
     </div>
     <div className="">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ad!</p>
     </div>
    </section>
  );
};

export default Header;
