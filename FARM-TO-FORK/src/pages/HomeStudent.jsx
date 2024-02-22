import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/HomeStudent.css";

const HomeStudent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students/buy")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [selectedNav, setSelectedNav] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [contact, setContact] = useState("");
  const [studentType, setStudentType] = useState("");
  const [inputQuantity, setInputQuantity] = useState(0);
  const [joinUsReason, setJoinUsReason] = useState("");

  const handleRadio = (e) => {
    setStudentType(e.target.value);
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log("Student submitted:", studentName, regNo, contact, studentType);
  };

  const handleButtonClick = () => {
    console.log("Button clicked. Quantity:", inputQuantity);
  };

  const handleJoinUsSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Join Us submitted:",
      studentName,
      regNo,
      contact,
      studentType,
      joinUsReason
    );
  };

  const handleLogoutConfirm = () => {
    // Implement logout confirmation logic
    console.log("Logout confirmed");
  };

  return (
    <>
      <div className="student-home">
        <nav className="student-navbar">
          <h1>Farm to Fork</h1>
          <ul className="student-nav-items">
            <li onClick={() => setSelectedNav(0)}>Buy</li>
            <li onClick={() => setSelectedNav(1)}>View Orders</li>
            <li onClick={() => setSelectedNav(2)}>Join Us</li>
            <li onClick={() => setSelectedNav(3)}>Logout</li>
          </ul>
        </nav>

        <p>
          Welcome <strong>Student</strong>
        </p>
        {selectedNav === 0 && (
          <div className="student-buy">
            {data.map((item) => (
              <div className="student-buy-item" key={item._id}>
                <h2 className="student-buy-item-title">{item.item}</h2>
                <p>{item.name}</p>
                <p>
                  <strong>Price :</strong> {item.normalPrice} / kg
                </p>
                <input
                  type="number"
                  placeholder="Quantity"
                  onChange={(e) => setInputQuantity(e.target.value)}
                />
                <button onClick={handleButtonClick}>Buy</button>
              </div>
            ))}
          </div>
        )}
        {selectedNav === 1 && (
          <div className="student-view-orders">
            {/* Implement logic to display orders */}
          </div>
        )}
        {selectedNav === 2 && (
          <div className="student-join-us">
            <h2>Join Us</h2>
            <form onSubmit={handleJoinUsSubmit}>
              <label>
                Student Name:
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </label>
              {/* ... (additional input fields) */}
              <button type="submit">Join Us</button>
            </form>
          </div>
        )}
        {selectedNav === 3 && (
          <div className="student-logout">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogoutConfirm}>Yes</button>
            <button>No</button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeStudent;
