import React from 'react'
import {Link} from 'react-router-dom'

const RoomCard = ({room}) => {
    const databaseId = import.meta.env.VITE_DATABASE_ID
    const bucketId = import.meta.env.VITE_STORAGE_ID

    const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${databaseId}`;

    const imageSrc = room.image ? imageUrl : '/images/no-image.jpg';

  return (
    <div className='bg-white shadow rounded-lg p-4 mt-4 text-start flex flex-row justify-between'>
        <div className='flex flex-col'>
        <img
          src={imageSrc}
          width={400}
          height={100}
          alt={room.name}
          className='w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg'
        />
       
       <div className='space-y-1'>
          <h4 className='text-lg font-semibold'>{room.name}</h4>
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'> Address:</span>{' '}
            {room.address}
          </p>
          
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'> Price:</span>$
            {room.price}/hour
          </p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
        {/* <Link
          
          className='bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-11 sm:w-auto text-center hover:bg-blue-700'
        >
          View Room
        </Link> */}
      </div>
    </div>
  )
}

export default RoomCard