import React from 'react'
import { useEffect, useState } from 'react'
import{databases} from '../config/appwrite'
import Spinner from '../../src/components/Spinner'
import RoomCard from './RoomCard'


const Rent = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = await databases.listDocuments(
          import.meta.env.VITE_DATABASE_ID, 
          import.meta.env.VITE_COLLECTION_ID 
        );
        setDocuments(rooms.documents);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if(loading){
    return <div><Spinner /></div>
  }

  return (
    <>
     
    {
      documents.length > 0 ? (
        documents.map((room) => <RoomCard room={room} key={room.$id} />)
      )
      :(
        <p>No rooms available at the moment</p>
      )
    }
    </>
  )
}

export default Rent