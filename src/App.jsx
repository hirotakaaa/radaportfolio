import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Project from "./components/project";
import Blog from "./components/blog"; // Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;