import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginCompany.css";
import axios from "axios";

export default function LoginCompany() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const input = {
      email,
      password,
    };
    try {
      const res = await axios.post("http://localhost:3001/logincompany", input);
      if (res.status === 200) navigate("/");
      localStorage.setItem("user", JSON.stringify(input));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginCompany">
      <form>
        <div className="container">
          <h1>Login for the Small Scale Company</h1>
          <p>
            This website is only for Small-Scale companies that are to be
            benefited.
          </p>
          <p>Please adhere to the Terms & Conditions of our website.</p>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="registerbtn" onClick={login}>
            Login
          </button>
          <button type="submit" className="cancelbtn">
            Cancel
          </button>
        </div>

        <div className="container signin">
          <p>
            Don't have an account? <Link to="/registeruser">Sign up</Link>
          </p>
          <p>
            One of the small scale companies?{" "}
            <Link to="/logincompany">Sign in for a company</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
