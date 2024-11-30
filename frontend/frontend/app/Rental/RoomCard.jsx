import React from 'react'
// import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const RoomCard = ({room}) => {
  const bucketId = import.meta.env.VITE_STORAGE_ID
    const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

    const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

    

    const imageSrc = room.image ? imageUrl : '/no-image.jpg';

  return (
    <div className='py-3'>
        <div className='flex flex-col shadow-lg rounded-lg items-center p-5 justify-between'>
          <Link to= "/roomPage" >
          <img
          src={imageSrc}
          width={300}
          alt={room.name}
          className='w-96 sm:w-64 md:w-80 lg:w-96 rounded-lg object-cover'
        />
          </Link>
       <div className='text-center'>
          <h4 className='text-lg font-semibold'>{room.name}</h4>
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'></span>₦
            {room.price}/year
          </p>
          {/* <p className='text-sm flex flex-wrap items-center justify-center gap-2 text-gray-600'>
            <span className='font-semibold text-gray-800'></span>{' '} 
            <FaMapMarker /> 
            {room.location}
          </p> */}
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'></span>{' '}
            {room.amenities}
          </p>
          
        </div>
      </div>
      {/* <div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
        <Link
          
          className='bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-11 sm:w-auto text-center hover:bg-blue-700'
        >
          View Room
        </Link> 
      </div> */}
    </div>
  )
}

export default RoomCard