import React from "react";
import { useState } from "react";
import "../styles/HomeStudent.css";
const HomeStudent = () => {
  const [selectedNav, setSelectedNav] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [contact, setContact] = useState("");
  const [studentType, setStudentType] = useState("");
  const handleRadio = (e) => {
    setStudentType(e.target.value);
  };
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log(studentName, regNo, contact, studentType);
    // Add student to database using axios
  };

  const handleButtonClick = () => {};

  return (
    <>
      <div className="student-home">
        <nav className="student-navbar">
          <h1>Farm to Fork</h1>
          <ul className="student-nav-items">
            <li onClick={(e) => setSelectedNav(0)}>Buy</li>
            <li onClick={(e) => setSelectedNav(1)}>View Orders</li>
            <li onClick={(e) => setSelectedNav(2)}>Join Us</li>
            <li onClick={(e) => setSelectedNav(3)}>Logout</li>
          </ul>
        </nav>
        <h1>Student Home</h1>
        <p>Welcome to the Student Home Page</p>
        {selectedNav === 0 && (
          <div className="student-buy">
            <h2>Buy</h2>
            <div className="student-post">
              <h3>Post Title</h3>
              <p>Bulk Price</p>
              <p>Retail Price</p>
              <p>Quantity</p>
              {buyClicked ? (
                <>
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    className="input-quantity"
                    onChange={(e) => {
                      setInputQuantity(e.target.value);
                    }}
                  />
                  <button onClick={(e) => setButtonClicked(true)}>Buy</button>
                </>
              ) : (
                <button onClick={handleButtonClick}>Buy</button>
              )}
            </div>
          </div>
        )}
        {selectedNav === 1 && (
          <div className="student-view-orders">
            <h2>View Orders</h2>
            <div className="student-order">
              <h3>Order Title</h3>
              <p>Order Description</p>
              <p>Price</p>
            </div>
          </div>
        )}
        {selectedNav === 2 && (
          <div className="student-join-us">
            <h2>Join Us</h2>
            <form onSubmit={handleStudentSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setStudentName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Reg. No"
                onChange={(e) => setRegNo(e.target.value)}
              />
              <input
                type="number"
                placeholder="Contact No."
                onChange={(e) => setContact(e.target.value)}
              />
              <input
                type="radio"
                name="Student"
                value="Hosteller"
                onChange={handleRadio}
              />
              <label>Hosteller</label>
              <input
                type="radio"
                name="Student"
                value="Day Scholar"
                onChange={handleRadio}
              />
              <label>Day Scholar</label>
              <label for="why-text">Why do you wanna join us</label>
              <input type="text" placeholder="👀👀?" id="why-text" />

              <button type="submit">Join Us</button>
            </form>
          </div>
        )}
        {selectedNav === 3 && (
          <div className="student-logout">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button>Yes</button>
            <button>No</button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeStudent;
