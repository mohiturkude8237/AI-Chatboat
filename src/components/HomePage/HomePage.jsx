// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import "../../Styles/HomePage.css";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { div } from 'framer-motion/client';

// const HomePage = () => {
// const bubblesRef = useRef([]);
// const navigate = useNavigate(); // Initialize navigate function

// useEffect(() => {
//   bubblesRef.current.forEach((bubble, index) => {
//     gsap.to(bubble, {
//       y: -window.innerHeight,
//       x: `+=${Math.random() * 300 - 150}`,
//       duration: 5 + Math.random() * 5,
//       repeat: -1,
//       ease: 'sine.inOut'
//     });
//   });
// }, []);

// const handleRedirect = () => {
//   navigate("/chatbot"); // Redirect to chatbot page
// };

//   return (

// {/* <div className="homepage">
//       <div className="glass-container">
//         <h1 className="title">Welcome to the AI voice Assistant</h1>
//        <p className="subtitle">Experience AI like never before
//        </p>
//        <button onClick={handleRedirect} className="arrow-button"></button>
//       </div>

//       {/* <div>
//         <video src="https://d1t11jpd823i7r.cloudfront.net/experience/variant-b-ep-mob.mp4"></video>
//        </div>
//     */}
//       {[...Array(50)].map((_, i) => (
//   <div
//     key={i}
//     className="bubble"
//     style={{
//       '--x': Math.random(),
//       '--y': Math.random(),
//       '--x2': Math.random(),
//       '--y2': Math.random()
//     }}
//   />
// ))}

//     </div> */}

//   );
// };

// export default HomePage;

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import "../../Styles/HomePage.css";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { div } from 'framer-motion/client';

// const HomePage = () => {
//   const bubblesRef = useRef([]);
//   const navigate = useNavigate(); // Initialize navigate function

//   useEffect(() => {
//     bubblesRef.current.forEach((bubble, index) => {
//       gsap.to(bubble, {
//         y: -window.innerHeight,
//         x: `+=${Math.random() * 300 - 150}`,
//         duration: 5 + Math.random() * 5,
//         repeat: -1,
//         ease: 'sine.inOut'
//       });
//     });
//   }, []);

//   const handleRedirect = () => {
//     navigate("/chatbot"); // Redirect to chatbot page
//   };

//   return (
//     <div className='flex flex-col gap-2'>

// <div className="homepage h-[100vh] w-[100vw]">
//       <div className="glass-container">
//         <h1 className="title">Welcome to the AI voice Assistant</h1>
//        <p className="subtitle">Experience AI like never before
//        </p>
//        <button onClick={handleRedirect} className="arrow-button"></button>
//       </div>

//       {/* <div>
//         <video src="https://d1t11jpd823i7r.cloudfront.net/experience/variant-b-ep-mob.mp4"></video>
//        </div>
//     */}
//       {[...Array(50)].map((_, i) => (
//   <div
//     key={i}
//     className="bubble"
//     style={{
//       '--x': Math.random(),
//       '--y': Math.random(),
//       '--x2': Math.random(),
//       '--y2': Math.random()
//     }}
//   />
// ))}

//     </div>

//       <div className='bg-fuchsia-500 h-[20rem]'>
//       <h1 className='text-2xl text-center pt-5 font-extrabold'>Hello</h1>
//       <p className='text-center text-2xl font-black'>This is 1st page</p>
//       </div>
//     </div>
//   )
// }

// import React, { useState} from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col gap-2">
//       <nav className="top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400 " onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>
//       <div className="bg-fuchsia-100 h-[100vh]">

//         <h1 className="text-black">Hello</h1>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import gsap from "gsap";
// import "../../Styles/HomePage.css";

// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const bubblesRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     bubblesRef.current.forEach((bubble, index) => {
//       gsap.to(bubble, {
//         y: -window.innerHeight,
//         x: `+=${Math.random() * 300 - 150}`,
//         duration: 5 + Math.random() * 5,
//         repeat: -1,
//         ease: "sine.inOut",
//       });
//     });
//   }, []);

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen gap-4">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* HomePage Content */}

//    <div className="mb-5">
//    <img src="https://www.q3tech.com/wp-content/uploads/2024/06/Evolution-of-chatbots.jpg" alt=""
//    className="rounded-2xl "
//    />
//    </div>

//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import gsap from "gsap";
// import Lottie from "lottie-react";
// import chatbotAnimation from "../../assets/chatbot-animation.json"; // First animation
// import "../../Styles/HomePage.css";

// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const bubblesRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     bubblesRef.current.forEach((bubble, index) => {
//       gsap.to(bubble, {
//         y: -window.innerHeight,
//         x: `+=${Math.random() * 300 - 150}`,
//         duration: 5 + Math.random() * 5,
//         repeat: -1,
//         ease: "sine.inOut",
//       });
//     });
//   }, []);

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       <div className="w-80 mt-25 bg-amber-200">
//         <Lottie animationData={chatbotAnimation} loop={true}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import Lottie from "lottie-react";
// import chatbotAnimation from "../../assets/chatbot-animation.json"; // Import Lottie animation
// import messageAnimation from "../../assets/message-animation.json"
// import "../../Styles/HomePage.css";

// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2"
//               size={25}
//             /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* HomePage Content - ADD `pt-16` to push it below navbar */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-6 bg-white w-full pt-16 h-[40rem]"
//       style={{backgroundImage: "url('https://media.mobidev.biz/2020/01/future-voice-assistants-technology-enterprise-iot-meets-data-science.jpg?strip=all&lossy=1&ssl=1')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         opacity: 0.8
//       }}
//       >
//         {/* Left Side - Lottie Animation */}
//         <div className="w-80 md:w-96">
//           <Lottie animationData={chatbotAnimation} loop={true} />
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="text-center md:text-left mt-10">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Welcome to the AI Voice Assistant
//           </h1>
//           <p className="text-lg md:text-xl text-white font-bold mt-3">
//             Experience AI like never before!
//           </p>
//           <button
//             onClick={handleRedirect}
//             className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg"
//           >
//             Get Started
//           </button>
//           <div className="w-80 md:w-96">
//             <Lottie animationData={messageAnimation} loop={true} />
//           </div>
//         </div>
//       </div>

//       {/* Additional Content */}
//       {/* <div className="bg-red-400 h-[20rem] pt-16">
//     <h1 className="text-white text-center">hello</h1>
//   </div> */}
//     </div>

//   );
// };

// export default HomePage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import Lottie from "lottie-react";
// import chatbotAnimation from "../../assets/chatbot-animation.json";
// import messageAnimation from "../../assets/message-animation.json";
// import "../../Styles/HomePage.css";

// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-gray-600 bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" size={25} /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">Services</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden absolute left-0 top-0 w-full h-screen bg-black bg-opacity-90 flex items-center justify-center">
//             <ul className="space-y-6 text-white text-xl">
//               <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* HomePage Content */}
//       <div
//         className="flex flex-col md:flex-row items-center justify-center gap-5 px-6 w-full min-h-screen pt-16 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('https://www.shutterstock.com/shutterstock/videos/3674310485/thumb/1.jpg?ip=x480')",

//         }}
//       >
//         {/* Left Side - Lottie Animation */}
//         <div className="hidden md:block w-72 md:w-96">
//           <Lottie animationData={chatbotAnimation} loop={true} />
//         </div>

//         {/* Right Side - Text Content */}
//         <div className=" md:text-left flex flex-col items-center md:items-start">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-200 md:text-center md:mt-4">
//             Welcome to the AI Voice Assistant
//           </h1>
//           <p className="text-lg md:text-xl text-white font-bold mt-4">
//             Talk Smart. Experience AI Like Never Before.
//           </p>
//           <button
//             onClick={handleRedirect}
//             className="mt-5 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg"
//           >
//             Get Started
//           </button>
//           <div className="w-72 md:w-96 mt-6">
//             <Lottie animationData={messageAnimation} loop={true} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot, FaMicrophone, FaComments, FaBrain } from "react-icons/fa";
// import Lottie from "lottie-react";
// import chatbotAnimation from "../../assets/chatbot-animation.json";
// import messageAnimation from "../../assets/message-animation.json";
// import "../../Styles/HomePage.css";

// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" size={25} /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-semibold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {isOpen && (
//           <div className="md:hidden absolute left-0 top-0 w-full h-screen bg-black bg-opacity-90 flex items-center justify-center z-40">
//             <ul className="space-y-6 text-white text-xl">
//               <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <div
//         className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 w-full min-h-screen pt-24 bg-cover bg-center relative"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1600267165302-4a6c2d8d97b0')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-cyan-900/30 backdrop-blur-sm"></div>

//         {/* Left Animation */}
//         <div className="z-10 hidden md:block w-80 md:w-96">
//           <Lottie animationData={chatbotAnimation} loop />
//         </div>

//         {/* Right Content */}
//         <div className="z-10 text-center md:text-left flex flex-col items-center md:items-start">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-pulse text-shadow">
//             Welcome to Your AI Voice Assistant
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 mt-4 font-medium">
//             Talk Smart. Experience AI like never before.
//           </p>
//           <button
//             onClick={handleRedirect}
//             className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full text-lg font-semibold animate-bounce"
//           >
//             Get Started
//           </button>
//           <div className="w-72 md:w-96 mt-6">
//             <Lottie animationData={messageAnimation} loop />
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <section className="bg-gray-100 py-14 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-10 text-gray-800">Key Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
//           <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
//             <FaMicrophone className="text-cyan-500 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2">Voice Recognition</h3>
//             <p className="text-gray-600">Interact naturally using your voice in real-time.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
//             <FaComments className="text-cyan-500 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2">Smart Responses</h3>
//             <p className="text-gray-600">Get accurate replies powered by AI conversation models.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
//             <FaBrain className="text-cyan-500 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold mb-2">Learning System</h3>
//             <p className="text-gray-600">Adapts to user input for a personalized experience.</p>
//           </div>
//         </div>
//       </section>

//       {/* Scroll Indicator */}
//       <div className="text-center py-4 text-gray-500 text-sm animate-bounce">⬇ Scroll Down to Explore More</div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState } from "react";
import { Link, useNavigate,NavLink } from "react-router-dom";
import Faq from "../Faq";

import {
  FaBars,
  FaTimes,
  FaRobot,
  FaMicrophone,
  FaComments,
  FaBrain,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import chatbotAnimation from "../../assets/chatbot-animation.json";
import messageAnimation from "../../assets/message-animation.json";
import "../../Styles/HomePage.css";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/chatbot");
  };

  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-lg z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold flex items-center text-cyan-400"
          >
            <FaRobot className="mr-2" size={25} /> Voice Assistant
          </NavLink>
          <ul className="hidden md:flex space-x-6 text-white text-lg">
            <li>
              <NavLink to="/" className="hover:text-cyan-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-cyan-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" className="hover:text-cyan-400">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-cyan-400">
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute w-full bg-black bg-opacity-95 top-full left-0 text-white text-center py-10 space-y-4 z-40">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-xl hover:text-cyan-400"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-center gap-10 px-6 w-full min-h-screen pt-24 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526378722351-0aa4f7d2cbb3')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-cyan-800/30 backdrop-blur-sm z-0"></div>

        <div className="z-10 hidden md:block w-80 md:w-96">
          <Lottie animationData={chatbotAnimation} loop />
        </div>

        <div className="z-10 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
            Welcome to Your AI Voice Assistant
          </h1>
          <div className="text-lg md:text-2xl font-semibold text-cyan-300 h-12 mb-4">
            <Typewriter
              options={{
                strings: [
                  "Talk Smart.",
                  "Get Instant Answers.",
                  "Experience AI like never before.",
                  "Your Voice, Our Intelligence.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <button
            onClick={handleRedirect}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 rounded-full font-bold text-lg transition-transform transform hover:scale-105"
          >
            Get Started
          </button>
          <div className="w-72 md:w-96 mt-6">
            <Lottie animationData={messageAnimation} loop />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {[
            {
              icon: (
                <FaMicrophone size={40} className="text-cyan-500 mx-auto" />
              ),
              title: "Voice Recognition",
              desc: "Speak naturally, let the AI handle the rest.",
            },
            {
              icon: <FaComments size={40} className="text-cyan-500 mx-auto" />,
              title: "Real-Time Chat",
              desc: "Instant, relevant responses—powered by advanced models.",
            },
            {
              icon: <FaBrain size={40} className="text-cyan-500 mx-auto" />,
              title: "Intelligent Learning",
              desc: "Improves with every interaction.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Users Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto text-center">
          {[
            "This AI assistant is a game-changer!",
            "Fast, accurate, and fun to use.",
            "Highly recommend it for smart productivity.",
          ].map((quote, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
            >
              <p className="italic text-gray-700">“{quote}”</p>
              <div className="mt-3 font-semibold text-cyan-600">
                User {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Faq/>

      {/* Scroll Indicator */}
      <div className="py-4 text-center text-gray-600 animate-bounce">
        ⬇ Scroll for More
      </div>

      {/* Floating Social Icons */}
      <div className="fixed top-1/3 left-2 flex flex-col space-y-4 z-50">
        <a
          href="#"
          className="text-white bg-gray-800 hover:bg-cyan-500 p-3 rounded-full"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-white bg-gray-800 hover:bg-cyan-500 p-3 rounded-full"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="text-white bg-gray-800 hover:bg-cyan-500 p-3 rounded-full"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
