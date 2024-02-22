import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Landing.css";

const Landing = () => {
  const [farmerClick, setFarmerClick] = useState(false);
  const [studentClick, setStudentClick] = useState(false);
  const [diningClick, setDiningClick] = useState(false);
  const [adminClick, setAdminClick] = useState(false);
  const handleFarmer = () => {
    setFarmerClick(true);
  };
  const handleStudent = () => {
    setStudentClick(true);
  };
  const handleDining = () => {
    setDiningClick(true);
  };
  const handleAdmin = () => {
    setAdminClick(true);
  };
  return (
    <>
      {farmerClick ? <Navigate to="/LoginFarmer" /> : <Navigate to="/" />}
      {studentClick ? <Navigate to="/LoginStudent" /> : <Navigate to="/" />}
      {diningClick ? <Navigate to="/LoginDS" /> : <Navigate to="/" />}
      {adminClick ? <Navigate to="/LoginAdmin" /> : <Navigate to="/" />}
      <div>
        <div className="landing">
          <div className="landing-1">
            <nav className="navbar">
              <div className="logo">
                <h1>Farm to Fork</h1>
              </div>
              <div className="links">
                <a href="/" className="link">
                  Home
                </a>
                <a href="/about" className="link">
                  About
                </a>
                <a href="/contact" className="link">
                  Contact
                </a>
              </div>
            </nav>
            <h1>Farm to Fork</h1>
            <p>
              Welcome to Farm to Fork. A platform that connects farmers and
              students. Farmers can post their produce and students can buy them
              directly from the farmers. We also have a dining service for the
              students. We also have an admin panel to manage the platform.
            </p>
          </div>

          <div className="landing-buttons">
            <button onClick={handleFarmer}>Farmer</button>
            <button onClick={handleStudent}>Student</button>
            <button onClick={handleDining}>Dining Service</button>
            <button onClick={handleAdmin}>Admin</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
