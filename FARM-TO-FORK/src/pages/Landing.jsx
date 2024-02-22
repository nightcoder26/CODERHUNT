import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Landing.css";
import logo from "../assets/farm-to-fork-high-resolution-logo-removebg-preview.png";
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
      <div className="landing-whole">
        <div className="landing">
          <div className="landing-1">
            <div className="navbar">
              <nav className="navbar">
                <div className="logo">
                  <img
                    src={logo}
                    className="logo-ff"
                    alt="logo"
                    width={150}
                    height={90}
                  />
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
            </div>
            <div className="landing-2">
              <p className="landing-text">
                Welcome to Farm to Fork.
                <br />
                Connecting farmers and students
                {/* A platform that connects farmers and
                students. Farmers can post their produce and students can buy
                them directly from the farmers. We also have a dining service
                for the students. We also have an admin panel to manage the
                platform. */}
              </p>
            </div>
          </div>
          <div className="landing-3">
            <div className="sentence">
              <p>Sourcing sustainable ingredients to campuses</p>
              <a className="link-sentence">Buy now</a>
            </div>
            <div className="sentence">
              <p>Join us in an urban farming project.</p>
              <a className="link-sentence">Join Now</a>
            </div>
            <div className="sentence ">
              <p>Discover fresh, local produce from farmers.</p>
              <a className="link-sentence">Explore</a>
            </div>
          </div>
          <p className="login-text">Login or SignUp</p>
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
