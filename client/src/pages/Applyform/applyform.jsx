import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./applyform.css";
import axios from "axios";

export default function applyform() {
  const navigate = useNavigate();
  const [empname, setEmpName] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setMail] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const input = {
      empname,
      qualification,
      skills,
      contact,
      mail

    };
    try{
      const res = await axios.post("http://localhost:3001/applyform", input);
      if(res.status === 200) navigate("/");
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  };

  return(
    <div className="applyform">
        <form>
        <div className="container">
          <h1>Hiring form to be filled by the unemployed to get employed</h1>
          <p>This company targets unemployed but qualified employees who are to be benefited.</p>
          <p>Please adhere to the Terms & Conditions of our company.</p>
      
          <label htmlFor="empname"><b>Name</b></label>
          <input type="text" placeholder="Enter your Name" name="empname" id="empname" onChange={e => setEmpName(e.target.value)} required />
      
          <label htmlFor="qualification"><b>Qualifications</b></label>
          <input type="text" placeholder="Provide your qualification for this job" name="qualification" id="qualification" onChange={e => setQualification(e.target.value)} required />

          <label htmlFor="skills"><b>Skills You Possess</b></label>
          <input type="text" placeholder="What are the relevant skills you possess?" name="skills" id="skills" onChange={e => setSkills(e.target.value)} required />
      
          <label htmlFor="contact"><b>Contact Details</b></label>
          <input type="number" placeholder="Enter your Mobile number" name="contact" id="contact" onChange={e => setContact(e.target.value)} required />
        
          <label htmlFor="mail"><b>Mail Address</b></label>
          <input type="text" placeholder="Enter your E-Mail ID" name="email" id="email" onChange={e => setMail(e.target.value)} required />
      
          <button type="submit" className="applybtn" onClick={apply}>Apply</button>
          <button type="submit" className="cancelbtn" >Cancel</button>
        </div>
      
        <div className="container signin">
          <p>Don't have an account? <Link to="/registeruser">Sign up</Link></p>
          <p>Already a registered user. Want to Login? <Link to="/loginuser">Sign in </Link></p>
        </div>
      </form>
    </div>
  );
}
