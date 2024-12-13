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

  const whatsappLink = room
    ? `https://wa.me/${room.contact}?text=${encodeURIComponent(
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
      <Link to="/rental" className="flex shadow-black p-2 shadow-md rounded-md items-center mb-4">
        <FaChevronLeft className="mr-1 inline" />
        <span className="ml-1">Back to Rentals</span>
      </Link>
      <h3 className='text-2xl mb-4 font-bold'>Property Details</h3>
      
      <div className="flex flex-col text-center items-center">
        <img
          src={imageUrl}
          alt={room.name}
          className="w-80 md:w-80 rounded-lg object-cover"
        />
        <div className='text-justify mx-6'>
        <Heading title={room.name} />
        <p>{room.description}</p>
        <p>Price: ₦{room.price}</p>
        <p>Amenities: {room.amenities}</p>
        <p>Contact: {room.contact}</p>
        <p>Location: {room.location}</p>
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
