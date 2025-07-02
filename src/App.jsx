import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainchatbot from './components/chatbot/mainchatbot';
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/chatbot" element={<Mainchatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
