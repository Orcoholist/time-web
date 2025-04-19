import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TimeMachine from "../pages/TimeMachine";
import Services from "../pages/Services";
import DestinationDetail from "../pages/DestinationDetail";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/timemachine" element={<TimeMachine />} />
      <Route path="/destination/:id" element={<DestinationDetail />} />
    </Routes>
    
  );
};

export default Router;
