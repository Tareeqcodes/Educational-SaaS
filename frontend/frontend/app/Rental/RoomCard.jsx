import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarker } from 'react-icons/fa'

const RoomCard = ({room}) => {
  const bucketId = import.meta.env.VITE_STORAGE_ID
    const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

    const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

    

    const imageSrc = room.image ? imageUrl : '/no-image.jpg';

  return (
    <section className='flex flex-col text-black shadow-lg rounded-lg items-center  p-5 justify-between'>
          <img
          src={imageSrc}
          width={300}
          alt={room.name}
          className='w-96 sm:w-64 md:w-80 lg:w-96 rounded-lg object-cover'
        />

    <div className='flex flex-col py-3 w-full'>

          <h2 className='text-lg font-semibold'>{room.name}</h2>
           <p className='text-md mt-4  justify-center font-medium'>
            <span className='flex items-center justify-center gap-1'>
            <FaMapMarker className='' />
            {room.location}
              </span>
          </p>
          
          <Link to={`/roomPage/${room.$id}`} className='bg-slate-100  text-xl shadow-md rounded-md mt-3 border-2'>
            Rent
          </Link>
          
          
        
      
    </div>
    </section>
  )
}

export default RoomCard