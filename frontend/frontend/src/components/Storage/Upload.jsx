import React from 'react'

const Upload = () => {
  return (
    <div className="max-w-lg mx-auto p-6 mt-6 bg-blue-50 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Upload PDF Resources</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-blue-700 font-medium mb-1">Uploader Name</label>
          <input
            type="text"
            name="uploaderName"
            
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Faculty</label>
          <input
            type="text"
            name="faculty"
          
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter faculty"
            required
          />
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Department</label>
          <input
            type="text"
            name="department"
            
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter department"
            required
          />
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Level</label>
          <select
            name="level"
            
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select level</option>
            <option value="100">100 Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
            <option value="500">500 Level</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Semester</label>
          <select
            name="semester"
          
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select semester</option>
            <option value="first">First Semester</option>
            <option value="second">Second Semester</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Upload PDF</label>
          <input
            type="file"
            name="pdfFile"
            accept=".pdf"
           
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
        >
          Upload
        </button>
      </form>
    </div>
  )
}

export default Upload