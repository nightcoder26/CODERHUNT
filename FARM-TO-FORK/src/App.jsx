import { useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Landing from "./pages/Landing.jsx";
import LoginFarmer from "../src/pages/LoginFarmer.jsx";
import LoginStudent from "../src/pages/LoginStudent.jsx";
import LoginDS from "../src/pages/LoginDS.jsx";
import LoginAdmin from "../src/pages/LoginAdmin.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/LoginFarmer" element={<LoginFarmer />} />
          <Route path="/LoginStudent" element={<LoginStudent />} />
          <Route path="/LoginDS" element={<LoginDS />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
