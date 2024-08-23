import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand/Logo Section */}
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold">EDUSPHERE</span>
          <p className="text-sm mt-2">Empowering education for a brighter future.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/about" className="hover:text-orange-400">About Us</a>
          <a href="/faculties" className="hover:text-orange-400">Faculties</a>
          <a href="/contact" className="hover:text-orange-400">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2024 EDUSPHERE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
