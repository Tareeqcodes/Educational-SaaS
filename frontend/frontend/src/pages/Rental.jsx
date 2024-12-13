import React from 'react'
import Rent from '../../app/Rental/Rent'
import Heading from '../components/Heading'

const Rental = () => {

  return (
    <section className=' min-h-screen flex flex-col items-center text-center justify-center'>
    <div className='my-20'>
      <Heading title='Available Rooms' />
      <div className=' flex flex-col md:flex-row text-center justify-center '>
      <Rent />
      </div>
    </div>
    </section>
  )
}

export default Rental