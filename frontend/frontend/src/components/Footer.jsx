import React from 'react';

const Footer = () => {
  const currentYear =new Date().getFullYear();
  return (
    <footer className="bg-gray-800 hidden lg:block text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Edusphere. All rights reserved.</p>
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
