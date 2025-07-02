import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 p-6 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
          </p>

          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="text-cyan-500 mr-3" />
              <span>support@voicebuddy.ai</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaPhoneAlt className="text-cyan-500 mr-3" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="text-cyan-500 mr-3" />
              <span>Bengaluru, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
            <a href="#" className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600"><FaTwitter /></a>
            <a href="#" className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600"><FaInstagram /></a>
            <a href="#" className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="p-8 bg-white">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

