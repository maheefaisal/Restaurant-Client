import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-end ">
          {/* Left side */}
          <div className="w-1/2 bg-blue-500 p-8 text-center ">
           <div className='ml-[190px]'>
           <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>Phone: +88 1835557787</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
           </div>
          </div>

          {/* Right side */}
          <div className="w-1/2 bg-gray-800 p-8 flex justify-start">
            <div className="text-xl">
              <p className="mb-2">Follow Us</p>
              <p className="mt-6">Follow Us on this platform</p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content bg-black">
        <div className="text-white">
          <p>
            Copyright © {currentYear} - All rights reserved by ACME Industries
            Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
