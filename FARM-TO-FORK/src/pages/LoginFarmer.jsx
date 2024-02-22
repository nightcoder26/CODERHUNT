import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const LoginFarmer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Farmer");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
      role: role,
    });
    // console.log(username, password, role);
  };
  return (
    <>
      <div className="login">
        <h1>Login as Farmer</h1>
        <form onSubmit={handleLoginSubmit}>
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
          <input type="text" value="Farmer" hidden />
          <button type="submit">Login</button>
          <p className="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginFarmer;
