import React from "react";
import { useState } from "react";
import "../styles/HomeStudent.css";
const HomeStudent = () => {
  const [selectedNav, setSelectedNav] = useState(0);

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
              <button>Buy</button>
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
            <form>
              <input type="text" placeholder="Full Name" />

              <input type="text" placeholder="Reg. No" />
              <input type="number" placeholder="Contact No." />
              <input type="radio" name="Student" value="Hosteller" />
              <label>Hosteller</label>
              <input type="radio" name="Student" value="Day Scholar" />
              <label>Day Scholar</label>
              <label for="why-text">Why do you wanna join us</label>
              <input type="text" placeholder="👀👀?" id="why-text" />

              <button>Join Us</button>
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
