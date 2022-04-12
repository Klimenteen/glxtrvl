import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training"
import Contact from "./routes/Contact"
import Footer from "./components/Footer";
import Video from './routes/Video'


function App() {
  return (
    <>
    <Routes>
      <Route path="/glxtrvl" element={<Video />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/training" element={<Training /> } />
      <Route path="/contact" element={<Contact /> } />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
