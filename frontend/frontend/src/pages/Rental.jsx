import React from 'react'
import Rent from '../../app/Rental/Rent'
import Heading from '../components/Heading'

const Rental = () => {

  return (
    <div className=' min-h-screen flex flex-col items-center my-28 text-center justify-center'>
      <h1 className='font-semibold text-xl mb-4 md:text-2xl'>Find the Perfect Hostels with us</h1>
      <Heading title='Available Rooms' />
      <div className=' flex flex-col md:flex-row text-center justify-center '>
      <Rent />
      </div>
    </div>
  )
}

export default Rental