import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registerUser.css";
import axios from "axios";

export default function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const input = {
      email,
      password
    };
    if(password === password1){
      try{
        await axios.post("http://localhost:3001/registeruser", input);
        console.log("New user Created successfully");
        navigate("/loginuser");
      }
      catch(err){
        console.log(err);
      }
    }
  };

  return(
    <div className="registerUser">
          <form>
    <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>

  
      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" onChange={e => setEmail(e.target.value)} required />
  
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" onChange={e => setPassword(e.target.value)} required />
  
      <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
      <input type="password" placeholder="Confirm Password" name="psw-repeat" id="psw-repeat" onChange={e => setPassword1(e.target.value)} required />

  
      <button type="submit" className="registerbtn" onClick={register} >Register</button>

      <button type="submit" className="cancelbtn">Cancel</button>

    </div>
  
    <div className="container signin">
      <p>Already have an account? <Link to="/loginuser">Sign in</Link></p>
      <p>Are you one of the Small scale companies? <Link to="/registeruser">Sign up for a company</Link></p>
    </div>
  </form>
    </div>
  );
}
