// PropertyUpload.js
import React, { useState } from 'react';
import { db, storage } from '../firebase/FireBaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const PropertyUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) return alert('Please upload an image');

    // Upload image to Firebase Storage
    const imageRef = ref(storage, `properties/${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);

    // Add property details to Firestore
    await addDoc(collection(db, 'properties'), {
      title,
      description,
      price,
      imageUrl,
    });

    setTitle('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <form onSubmit={handleUpload} className="flex flex-col gap-4 py-40 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Property Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Upload Property
      </button>
    </form>
  );
};

export default PropertyUpload;
