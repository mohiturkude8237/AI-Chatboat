import React from 'react';
import { FaMicrophone, FaRobot, FaComments, FaShieldAlt, FaBolt, FaGlobe } from 'react-icons/fa';

const features = [
  {
    icon: <FaMicrophone className="text-3xl text-cyan-500" />,
    title: "Voice Commands",
    description: "Control the assistant with natural spoken language — hands-free, fast, and intuitive.",
  },
  {
    icon: <FaRobot className="text-3xl text-cyan-500" />,
    title: "Smart AI Responses",
    description: "AI-powered replies that understand context and respond intelligently.",
  },
  {
    icon: <FaComments className="text-3xl text-cyan-500" />,
    title: "Real-Time Chat",
    description: "Instant interaction with smooth and seamless messaging in real-time.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-cyan-500" />,
    title: "Private & Secure",
    description: "Built with privacy in mind — no data is stored without your consent.",
  },
  {
    icon: <FaBolt className="text-3xl text-cyan-500" />,
    title: "Fast Performance",
    description: "Optimized for speed with a lightweight, responsive UI across all devices.",
  },
  {
    icon: <FaGlobe className="text-3xl text-cyan-500" />,
    title: "Multi-Language Support",
    description: "Supports multiple languages for a more inclusive experience worldwide.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Powerful Features of <span className="text-cyan-500">VoiceBuddy</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore what makes our AI voice assistant smart, secure, and incredibly useful for everyday task.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
