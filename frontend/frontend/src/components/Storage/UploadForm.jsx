import { useState } from "react";
import { PutObjectCommand, S3Client, } from "@aws-sdk/client-s3";


const UploadForm = () => {
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  const [file, setFile] = useState(null);

  const handleFacultyChange = (e) => {
    setFaculty(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !uploaderName || !faculty || !department || !level) {
      alert("Please fill in all fields and select a file.");
      return;
    }
  
    const s3 = new S3Client({
      endpoint: 'https://s3.wasabisys.com', 
      region: import.meta.env.VITE_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
    },
    });
  
    const params = {
      Bucket: 'edusphere-pdfs',
      Key: `${faculty}/${department}/${level}/${file.name}`, 
      Body: file,
      ContentType: file.type,
    };
  
    try {
      const command = new PutObjectCommand(params);
      const data = await s3.send(command);
      console.log("File uploaded successfully:", data);

      
      alert("File uploaded successfully!");
  
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Error uploading file. Please try again.");
    }
  };
  
  return (
    <div className="max-w-xl container mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload PDF</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-justify">
        <div className="mb-3 ">
          <label htmlFor="faculty" className="block text-sm font-bold mb-2 text-gray-700">
            Faculty:
          </label>
          <select
            id="faculty"
            value={faculty}
            onChange={handleFacultyChange}
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
            value={department}
            onChange={handleDepartmentChange}
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
            onChange={handleLevelChange}
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
            onChange={(e) => setUploaderName(e.target.value)}
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
            onChange={handleFileChange}
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
  );
};

export default UploadForm;
