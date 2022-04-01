import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/NavBar";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training"
import Contact from "./routes/Contact"
import Footer from "./components/Footer";
import Video from './components/Video'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Video />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/training" element={<Training /> } />
      <Route path="/contact" element={<Contact /> } />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
