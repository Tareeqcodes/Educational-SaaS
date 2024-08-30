import React from 'react';
import PDFCard from './PDFCard';

const PDFLists = () => {
  const pdfs = [
    { id: 1, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen' },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {pdfs.map(pdf => (
        <PDFCard key={pdf.id} title={pdf.title} author={pdf.author} />
      ))}
    </div>
  );
};

export default PDFLists;
