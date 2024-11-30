import React from 'react'
import { useState } from 'react'
import { storage, databases, ID } from '../config/appwrite'
import {toast} from 'react-toastify'
import { useAuth } from '../context/Authcontext'

const UploadRoom = () => {
  const { user} = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    amenities: '',
    address: '',
    location: '',
    price: '',
    contact: '',
    image: null,
  });
  
  
   
  const handleInputChange = (e) =>{
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] })); // File input
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.$id) {
      toast.error("User is not authenticated");
      return;
    }

    let imageID;
    const image = formData.image;

    if (image && image.size > 0 && image.name !== 'undefined'){
      try {
        const response = await storage.createFile('rooms', ID.unique(), image)
        imageID = response.$id;
        
      } catch (error) {
        console.log('Error uploading image', error);
        return {
          error: 'Error uploading image',
        };
      }
    }

    const documentData = {
      user_id: user.$id,
      name: formData.name,
      description: formData.description,
      amenities: formData.amenities,
      address: formData.address,
      location: formData.location,
      price: formData.price,
      contact: formData.contact,
      image: imageID, // Save the File ID in the document
    };
      try {
        await databases.createDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          ID.unique(),
          documentData
         );
         console.log('Document data:', documentData);

         toast.success('Room created successfully');
      } catch (error) {
        console.log('Error creating room:',error)
      }
  }
  
  return (
    <div className='text-center h-full overflow-y-scroll'>
    <h2 className='text-2xl shadow-sm my-3 py-5 font-semibold'>Add Room</h2>
    <div className='shadow-lg text-justify w-full md:w-20 p-1'>
      <form onSubmit={handleSubmit}>
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
              className='border rounded w-full py-1 px-2'
              placeholder='Enter a name (Large Conference Room)'
              required
              onChange={handleInputChange}
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
              className='border rounded w-full  py-1 px-2'
              placeholder='Enter a description for the room'
              required
              onChange={handleInputChange}
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
              className='border rounded w-full py-1 px-2'
              placeholder='Amenities CSV (projector, whiteboard, etc.)'
              required
              onChange={handleInputChange}
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
              className='border rounded w-full py-1 px-2'
              placeholder='Enter full address'
              required
              onChange={handleInputChange}
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
              className='border rounded w-full py-1 px-2 mb-3'
              placeholder='Location (Building, Floor, Room)'
              required
              onChange={handleInputChange}
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
              className='border rounded w-full py-1 px-2'
              placeholder='Enter price per hour'
              required
              onChange={handleInputChange}
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
              className='border rounded w-full py-1 px-2'
              placeholder='Enter contact info '
              required
              onChange={handleInputChange}
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
              className='border rounded w-full py-1 px-2'
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700'
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