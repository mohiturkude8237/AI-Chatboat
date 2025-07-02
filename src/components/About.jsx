// import React from "react";
// import { FaRobot } from "react-icons/fa";
// import Lottie from "lottie-react";
// // import aboutAnimation from "../../assets/about-animation.json"; // Add your own animation

// const About = () => {
//   return (
//     <section className="bg-white py-16 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 flex justify-center items-center gap-2">
//             <FaRobot className="text-cyan-500" />
//             About <span className="text-cyan-500">VoiceBuddy</span>
//           </h2>
//           <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
//             Get to know more about your personal AI-powered voice assistant.
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Left: Animation / Image */}
//           <div className="w-full">
//             <Lottie animationData={aboutAnimation} loop />
//           </div>

//           {/* Right: Text */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               <span className="font-bold text-cyan-600">VoiceBuddy</span> is designed to empower users to interact with
//               technology naturally — using just their voice. Whether you're asking questions, seeking guidance,
//               or managing tasks, VoiceBuddy is your intelligent, always-available companion.
//             </p>

//             <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Why We Built It</h3>
//             <p className="text-gray-700 leading-relaxed">
//               We believe AI should be accessible, responsive, and personal. That’s why we’ve built an assistant that
//               understands your voice, adapts to your needs, and helps you focus on what matters most — with ease and intelligence.
//             </p>

//             {/* Optional CTA */}
//             <div className="mt-6">
//               <a
//                 href="/features"
//                 className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg shadow"
//               >
//                 Explore Features →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
// import React from 'react';

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 py-12">
//       <h1 className="text-4xl font-bold mb-4">About VoiceBuddy</h1>
//       <p className="text-lg max-w-2xl text-center">
//         VoiceBuddy is your personal AI-powered assistant that helps you get things done by simply talking.
//         It combines cutting-edge voice recognition with intelligent responses to make your daily tasks easier.
//       </p>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { FaMicrophoneAlt, FaBrain, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 inline-block mb-4">
          About VoiceBuddy
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Your intelligent AI-powered voice assistant designed to make life easier, one command at a time.
        </p>
      </div>

      {/* Mission / Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {/* Mission */}
        <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition">
          <FaMicrophoneAlt className="text-cyan-500 text-3xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Empower users to interact with technology through natural conversation — fast, smart, and human-like.
            VoiceBuddy is built to reduce friction between thoughts and actions using the power of AI.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition">
          <FaBrain className="text-cyan-500 text-3xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To become the most accessible, reliable, and emotionally intelligent voice assistant that feels like a real companion —
            whether you’re working, relaxing, or learning.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">The Journey of VoiceBuddy</h3>
        <div className="space-y-6 border-l-4 border-cyan-500 pl-6">
          <div>
            <span className="text-sm text-cyan-600 font-semibold">2023 - Idea Born</span>
            <p className="text-gray-700 mt-1">Started as a concept to simplify voice-powered tasks with AI intelligence.</p>
          </div>
          <div>
            <span className="text-sm text-cyan-600 font-semibold">2024 - MVP Launched</span>
            <p className="text-gray-700 mt-1">A simple, fast, and reliable AI chatbot was released with real-time voice input.</p>
          </div>
          <div>
            <span className="text-sm text-cyan-600 font-semibold">2025 - Global Users</span>
            <p className="text-gray-700 mt-1">Serving thousands of users globally with personalized responses and evolving intelligence.</p>
          </div>
        </div>
      </div>

      {/* Community / CTA */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-xl p-10 mx-4 md:mx-20 shadow-lg">
        <FaUsers className="text-4xl mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Join the VoiceBuddy Community</h3>
        <p className="mb-4">Be part of the growing family of AI enthusiasts and productivity seekers.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us →
        </a>
      </div>
    </div>
  );
};

export default About;
