import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import About from "./pages/About";

import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
