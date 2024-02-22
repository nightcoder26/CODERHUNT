import React from "react";
import { useState } from "react";
import axios from "axios";
const SignupFarmer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("Farmer");
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password, fullName, address, role);
    axios.post("http://localhost:3000/signup", {
      username: username,
      password: password,
      fullName: fullName,
      address: address,
      role: role,
    });
  };
  return (
    <>
      <div className="signup">
        <form onSubmit={handleSignupSubmit}>
          <h1>Signup as Farmer</h1>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input type="text" value="Farmer" hidden />
          <button type="submit">Signup</button>
          <p className="message">
            Already registered? <a href="/LoginFarmer">Login</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupFarmer;
