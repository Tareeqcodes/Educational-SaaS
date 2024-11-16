import React from 'react'

const Upload = () => {
  return (
    <div className="max-w-xl container mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload PDF</h2>
      <form className="space-y-4 text-justify">
        <div className="mb-3 ">
          <label htmlFor="faculty" className="block text-sm font-bold mb-2 text-gray-700">
            Faculty:
          </label>
          <select
            id="faculty"
  
            
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Faculty</option>
            <option value="science">Science</option>
            <option value="engineering">Engineering</option>
            <option value="arts">Arts</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="block text-sm font-bold  mb-2 text-gray-700">
            Department:
          </label>
          <select
            id="department"
        
            
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Department</option>
            {faculty === "science" && <option value="biology">Biology</option>}
            {faculty === "engineering" && <option value="mechanical">Mechanical</option>}
            {faculty === "arts" && <option value="history">History</option>}
          
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="level" className="block text-sm font-bold mb-2 text-gray-700">
            Level:
          </label>
          <select
            id="level"
            value={level}
          
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="uploaderName" className="block text-sm font-bold mb-2 text-gray-700">
            Lecturer Name:
          </label>
          <input
            type="text"
            id="uploaderName"
            value={uploaderName}
           
            className="mt-1 block w-full text-green-600 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fileUpload" className="block text-sm font-bold mb-3 text-gray-700">
            Select PDF:
          </label>
          <input
            type="file"
            id="fileUpload"
            
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Upload PDF
        </button>
      </form>
    </div>
  )
}

export default Upload