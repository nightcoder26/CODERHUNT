import React from "react";
import Navbar from "../components/Navbar";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

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
      <Navbar />
      {farmerClick ? <Navigate to="/LoginFarmer" /> : <Navigate to="/" />}
      {studentClick ? <Navigate to="/LoginStudent" /> : <Navigate to="/" />}
      {diningClick ? <Navigate to="/LoginDS" /> : <Navigate to="/" />}
      {adminClick ? <Navigate to="/LoginAdmin" /> : <Navigate to="/" />}
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Welcome to Farm to Fork</h1>
              <p>
                Farm to Fork is a platform that connects farmers, students, and
                dining services. It is a platform that allows farmers to sell
                their produce to dining services and students to buy produce
                from dining services.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-primary" onClick={handleFarmer}>
                    Farmer
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary" onClick={handleStudent}>
                    Student
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary" onClick={handleDining}>
                    Dining Services
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary" onClick={handleAdmin}>
                    Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
