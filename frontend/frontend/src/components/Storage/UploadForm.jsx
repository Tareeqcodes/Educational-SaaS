import { useState } from "react";

const UploadForm = () => {
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  const [file, setFile] = useState(null);

  const handleFacultyChange = (e) => {
    setFaculty(e.target.value);
    // Fetch departments based on faculty selection (if needed)
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    // Fetch levels based on department selection (if needed)
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !uploaderName || !faculty || !department || !level) {
      alert("Please fill in all fields and select a file.");
      return;
    }
    // Handle file upload to Wasabi here (e.g., use a cloud storage SDK)
    console.log("File:", file);
    console.log("Uploader:", uploaderName, faculty, department, level);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload PDF</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
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
            {/* Add more faculties as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
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
            {/* Add more departments as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="level" className="block text-sm font-medium text-gray-700">
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
            {/* Add more levels as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="uploaderName" className="block text-sm font-medium text-gray-700">
            Uploader Name:
          </label>
          <input
            type="text"
            id="uploaderName"
            value={uploaderName}
            onChange={(e) => setUploaderName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">
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
