import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Body from "./Components/Body";
import Community from "./Components/Community";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter basename="Deshanta-Vyavaha">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </BrowserRouter>
  );
}

export default App;
