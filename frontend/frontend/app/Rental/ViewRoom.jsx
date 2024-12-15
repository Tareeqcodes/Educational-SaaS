import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaWhatsapp } from 'react-icons/fa';
import Heading from '../../src/components/Heading';
import GetSingleRoom from './GetSingleRoom';
import Spinner from '../../src/components/Spinner';

const ViewRoom = () => {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const fetchedRoom = await GetSingleRoom(id);
        setRoom(fetchedRoom);
      } catch (err) {
        console.error('Error fetching room:', err);
        setError('Unable to fetch room details.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const bucketId = import.meta.env.VITE_STORAGE_ID;
  const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

  const imageUrl = room
    ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
    : '/no-image.jpg';

    const countryCode = '+234';
    const formattedContact = room && room.contact ? (room.contact.startsWith('0')
    ? countryCode + room.contact.slice(1)
    : countryCode + room.contact) : '';



  const whatsappLink = room
    ? `https://wa.me/${formattedContact}?text=${encodeURIComponent(
        `Hello, I am interested in your room listing: ${room.name}.`
      )}`
    : '#';

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Heading title={error} />;
  }

  if (!room) {
    return <Heading title="Room Not Found" />;
  }

  return (
    <div className="flex flex-col pt-20 items-center justify-center text-center">
      <Link to="/rental" className="flex hover:bg-orange-500 hover:text-white p-2 shadow-md rounded-md items-center mb-4">
        <FaChevronLeft className="mr-1 inline" />
        <span className="ml-1">Back to Rentals</span>
      </Link>
      <h3 className='text-2xl mb-4 font-semibold'>Property Details</h3>
      
      <div className="flex px-5 flex-col justify-center text-center items-center">
        <img
          src={imageUrl}
          alt={room.name}
          width={400}
          className="md:w-full rounded-lg object-cover"
        />
        <div className="text-justify px-10 py-5 md:py-8">
        <Heading title={room.name} />
        
        <p className='text-xs font-medium mb-2'>{room.description}</p>
        <p className="text-lg font-medium mb-2 text-green-500"><span className='text-lg font-semibold'>Price:</span> ₦{room.price}/year</p>
        <p className="mb-2 text-lg font-medium"><span className='text-lg font-semibold'>Amenities:</span> {room.amenities}</p>
        <p className="mb-2 text-lg font-medium"><span className='text-lg font-semibold'>Contact:</span> {room.contact}</p>
        <p className='mb-2'><span className='text-lg font-semibold'>Location:</span> {room.location}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition"
        >
          <FaWhatsapp className="mr-2" /> Contact on WhatsApp
        </a>
        </div>
      </div>
    </div>
  );
};

export default ViewRoom;
