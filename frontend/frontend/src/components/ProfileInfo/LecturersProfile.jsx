// import React, { useState } from 'react';

// const LecturersProfile = () => {
//   const [pdfs, setPdfs] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploaderName, setUploaderName] = useState('');

//   // Handle PDF file change
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   // Handle uploader name change
//   const handleNameChange = (e) => {
//     setUploaderName(e.target.value);
//   };

//   // Handle the file upload
//   const handleUpload = () => {
//     if (selectedFile && uploaderName) {
//       // Simulate upload process and add to uploaded files list
//       const newPdf = {
//         name: selectedFile.name,
//         uploader: uploaderName,
//         url: URL.createObjectURL(selectedFile), // Temporary URL for preview
//       };
//       setPdfs([...pdfs, newPdf]);
//       setSelectedFile(null);  // Reset file input
//       setUploaderName('');  // Reset name input
//     } else {
//       alert("Please fill out all fields before uploading.");
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6">Lecturer Dashboard</h2>

//       {/* Upload Form */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-4">Upload PDF</h3>
        
//         {/* Name of Uploader */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Uploader Name</label>
//           <input
//             type="text"
//             value={uploaderName}
//             onChange={handleNameChange}
//             className="w-full border border-gray-300 p-2 rounded-md"
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* PDF File Upload */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Select PDF</label>
//           <input
//             type="file"
//             accept=".pdf"
//             className="w-full border border-gray-300 p-2 rounded-md"
//             onChange={handleFileChange}
//           />
//         </div>

//         {/* Upload Button */}
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           onClick={handleUpload}
//         >
//           Upload
//         </button>
//       </div>

//       {/* Uploaded PDFs */}
//       <div>
//         <h3 className="text-xl font-semibold mb-4">Your Uploaded PDFs</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {pdfs.length > 0 ? (
//             pdfs.map((pdf, index) => (
//               <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
//                 <p><strong>Uploader:</strong> {pdf.uploader}</p>
//                 <p><strong>File Name:</strong> {pdf.name}</p>
//                 <a
//                   href={pdf.url}
//                   className="text-blue-500"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View PDF
//                 </a>
//               </div>
//             ))
//           ) : (
//             <p>No PDFs uploaded yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LecturersProfile;
