import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registerCompany.css";
import axios from "axios";

export default function RegisterCompany() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [turnover, setTurnover] = useState(0);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const input = {
      email,
      password,
      turnover
    };
    if(password === password1){
      try{
        await axios.post("http://localhost:3001/registercompany", input);
        console.log("New company Created successfully");
        navigate("/logincompany");
      }
      catch(err){
        console.log(err);
      }
    }
  };

  return (
    <div className="registerCompany">
      <form>
        <div class="container">
          <h1>Register for the Small Scale Company</h1>
          <p>
            This website is only for Small-Scale companies that are to be
            benefited.
          </p>
          <p>Please adhere to the Terms & Conditions of our website.</p>

          <label  htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            onChange={e => setPassword(e.target.value)}
            required
          />

          <label htmlFor="psw-repeat">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="psw-repeat"
            id="psw-repeat"
            onChange={e => setPassword1(e.target.value)}
            required
          />

          <label htmlFor="psw">
            <b>Annual Turn-Over Amount</b>
          </label>
          <input
            type="number"
            placeholder="Enter Turn-Over Amount"
            name="turnover"
            id="turnover"
            onChange={e => setTurnover(e.target.value)}
            required
          />

          <button type="submit" class="registerbtn" onClick={register} >
            Register
          </button>
          <button type="submit" class="cancelbtn">
            Cancel
          </button>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <Link to="/logincompany">Sign in</Link>
          </p>
          <p>
            Not a Small scale company?{" "}
            <Link to="/loginuser">Sign up for a normal user</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
