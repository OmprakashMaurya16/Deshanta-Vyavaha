import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Community from "./Components/Community";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter basename="Deshanta-Vyavaha">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
