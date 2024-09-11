// PropertyList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase/FireBaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const querySnapshot = await getDocs(collection(db, 'properties'));
      const propertiesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProperties(propertiesList);
    };

    fetchProperties();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {properties.map((property) => (
        <div key={property.id} className="border p-4 rounded shadow">
          <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{property.title}</h2>
          <p className="text-gray-600">{property.description}</p>
          <p className="text-blue-500 font-semibold mt-2">Price: ${property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
