import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainchatbot from './components/chatbot/mainchatbot';
import Home from "./components/HomePage/HomePage";
import About from "./components/About";


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
    
        <Route path="/chatbot" element={<Mainchatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
