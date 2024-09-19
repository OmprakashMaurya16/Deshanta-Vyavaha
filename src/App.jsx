import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Community from "./Components/Community";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
