import React from "react";
import "./homecompany.css";
import { Link } from "react-router-dom";

export default function Home() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="homecompany">
      <nav class="navbar">
        <h2 class="navbar-logo">
          <a href="#home">JOBSEARCHEE</a>
        </h2>
        <div class="navbar-menu">
          <a href="#jobs">Jobs</a>
          <a href="#companies">Companies</a>
          <a href="#testimoni">Testimonial</a>
          <a href="#blog">Blogs</a>
          <Link to="/logincompany">
            <div onClick={logout}>{currentUser ? "Logout" : "Sign In"}</div>
          </Link>
        </div>
        <div class="menu-toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>

        <h1>COMPANY SIDE DASHBOARD</h1>

        <section class="hiring">
        <div class="hiring-detail">
          <h1 class="section-title">A CALL FOR JOB OFFER</h1>
          <p>SIMPLY GET HIRED</p>
        </div>
        <button class="join-button">Join Now</button>
      </section>

        <Link to="/hiringform">HIRE EMPLOYEES</Link>






    </div>




  )








}