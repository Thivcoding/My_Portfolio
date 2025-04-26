import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route  } from "react-router-dom"; 
import "../index.css"; 
import Navbar from "../components/Navbar/Navbar";  
import Hero from "../components/Hero/Hero";        
import Skill from "../components/Skill/Skill";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";  
import HelloModal from "../components/Modal"; 

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
    {/* Modal */}
    <HelloModal show={showModal} onClose={() => setShowModal(false)} />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Hero />} />
        <Route path="/Skill"  element={<Skill />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
