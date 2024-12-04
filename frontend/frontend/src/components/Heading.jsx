import React from 'react'

const Heading = ({title}) => {
  return (
    <section className='bg-white mb-5'>
      <h1 className='text-2xl font-bold tracking-tight text-gray-900'>
        {title}
      </h1>
    </section>
  )
}

export default Heading