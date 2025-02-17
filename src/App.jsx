import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import About from "./pages/About";
import HostLayout from "./pages/Host/components/HostLayout";
import Dashboard from "./pages/Host/pages/Dashboard";
import Income from "./pages/Host/pages/Income";
import HostVans from "./pages/Host/pages/Host-Vans/HostVans";
import HostVansDetail from "./pages/Host/pages/Host-Vans/HostVansDetail";
import Reviews from "./pages/Host/pages/Reviews";

import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:hostId" element={<HostVansDetail />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
