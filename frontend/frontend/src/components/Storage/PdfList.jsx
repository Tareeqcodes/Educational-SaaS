import { useState } from "react";

const PDFList = ({ pdfs, isLecturer, deletePdf }) => {
  const [filterFaculty, setFilterFaculty] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");

  const filteredPdfs = pdfs.filter(
    (pdf) =>
      (!filterFaculty || pdf.faculty === filterFaculty) &&
      (!filterDepartment || pdf.department === filterDepartment)
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <select
          onChange={(e) => setFilterFaculty(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Filter by Faculty</option>
          <option value="science">Science</option>
          <option value="engineering">Engineering</option>
          <option value="arts">Arts</option>
        </select>

        <select
          onChange={(e) => setFilterDepartment(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Filter by Department</option>
          {filterFaculty === "science" && <option value="biology">Biology</option>}
          {filterFaculty === "engineering" && <option value="mechanical">Mechanical</option>}
          {filterFaculty === "arts" && <option value="history">History</option>}
        </select>
      </div>

      {/* PDF Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPdfs.map((pdf) => (
          <div key={pdf.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{pdf.title}</h3>
            <p>Uploaded by: {pdf.uploaderName}</p>
            <p>Faculty: {pdf.faculty}</p>
            <p>Department: {pdf.department}</p>
            <p>Uploaded on: {new Date(pdf.uploadDate).toLocaleDateString()}</p>
            <a
              href={pdf.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 hover:underline"
            >
              View PDF
            </a>
            {isLecturer && (
              <button
                onClick={() => deletePdf(pdf.id)}
                className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFList;
