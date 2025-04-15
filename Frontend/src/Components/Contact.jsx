

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const ContactUs = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-black">Contact Us</h2>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message"
              className="w-full px-4 py-2 border rounded-md outline-none resize-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default ContactUs;


