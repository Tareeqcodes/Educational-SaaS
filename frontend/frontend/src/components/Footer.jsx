import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© 2024 Edusphere. All rights reserved.</p>
        <div className="mt-2">
          <a href="/" className="mr-4">About</a>
          <a href="/" className="mr-4">Contact</a>
          <a href="/" className="mr-4">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
