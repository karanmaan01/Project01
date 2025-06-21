import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import '@ant-design/v5-patch-for-react-19';
import bgImage from './assets/pic2.jpg';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ✅ Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-110 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* ✅ Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>

      {/* ✅ Foreground App Content */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;