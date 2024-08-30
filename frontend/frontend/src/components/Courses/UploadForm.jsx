import React from 'react';

const UploadForm = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Upload a New Course</h3>
      <form>
        <input
          type="text"
          placeholder="Course Title"
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          placeholder="Course Description"
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="file"
          className="w-full p-2 border rounded mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
