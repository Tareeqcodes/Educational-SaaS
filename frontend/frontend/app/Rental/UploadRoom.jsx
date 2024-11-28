import React from 'react'

const UploadRoom = () => {
  return (
    <div className='text-justify h-full'>
    <h2 className='text-3xl mb-3 mt-5 ml-4 shadow-sm font-bold'>Add Room</h2>
    <div className='shadow-lg w-full p-5'>
      <form action="">
      <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'
            >
              Room Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='border rounded w-full py-2 px-3'
              placeholder='Enter a name (Large Conference Room)'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 font-bold mb-2'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='border rounded w-full h-24 py-2 px-3'
              placeholder='Enter a description for the room'
              required
            ></textarea>
          </div>
          <div className='mb-4'>
            <label 
              htmlFor='amenities'
              className='block text-gray-700 font-bold mb-2'
            >
              Amenities
            </label>
            <input
              type='text'
              id='amenities'
              name='amenities'
              className='border rounded w-full py-2 px-3'
              placeholder='Amenities CSV (projector, whiteboard, etc.)'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-gray-700 font-bold mb-2'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className='border rounded w-full py-2 px-3'
              placeholder='Enter full address'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='location'
              className='block text-gray-700 font-bold mb-2'
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='border rounded w-full py-2 px-3'
              placeholder='Location (Building, Floor, Room)'
              required
            />
             
          <div className='mb-4'>
            <label
              htmlFor='price'
              className='block text-gray-700 font-bold mb-2'
            >
              Price
            </label>
            <input
              type='number'
              id='price'
              name='price'
              className='border rounded w-full py-2 px-3'
              placeholder='Enter price per hour'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='contact'
              className='block text-gray-700 font-bold mb-2'
            >
              Contact-Info
            </label>
            <input
              type='number'
              id='contact'
              name='contact'
              className='border rounded w-full py-2 px-3'
              placeholder='Enter contact info '
              required
            />
          </div>
          {/* image UploadRoom */}
          <div className='mb-8'>
            <label
              htmlFor='image'
              className='block text-gray-700 font-bold mb-2'
            >
              Image
            </label>

            <input
              type='file'
              id='image'
              name='image'
              className='border rounded w-full py-2 px-3'
            />
          </div>
          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
            >
              Save
            </button>
          </div>
          </div>
      </form>
    </div>
    </div>
  )
}

export default UploadRoom