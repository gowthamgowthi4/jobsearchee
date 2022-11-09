import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="home">
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

      <header>
        {/* <h1 class="header-title">
          FIND YOUR <span>PERFECT JOB</span> EASILY
        </h1> */}
      </header>

      <div class="search-wrapper">
        <div class="search-box">
          <div class="search-card">
            <input
              class="search-input"
              type="text"
              placeholder="Job title or keywords"
            />
            <button class="search-button">Search</button>
          </div>
        </div>
      </div>

      <div class="filter-box">
        <div class="filter-dropdown">
          <select class="filter-select" id="job-level" name="job-level">
            <option>Job Level</option>
            <option>Entry</option>
            <option>Mid-Senior</option>
            <option>Director</option>
          </select>
          <select class="filter-select" id="job-function" name="job-function">
            <option>Job Function</option>
            <option>IT</option>
            <option>Management</option>
            <option>Education</option>
          </select>
          <select class="filter-select" id="employment" name="employment">
            <option>Employment Type</option>
            <option>Internship</option>
            <option>Part Time</option>
            <option>Full Time</option>
          </select>
          <select class="filter-select" id="location" name="location">
            <option>Location</option>
            <option>Remote</option>
            <option>US</option>
            <option>UK</option>
          </select>
          <select class="filter-select" id="education" name="education">
            <option>Education</option>
            <option>High School</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
          </select>
        </div>
        <div class="filter-chosen">
          <div class="chosen-card">
            Remote <i class="fas fa-times-circle"></i>
          </div>
          <div class="chosen-card">
            Full time <i class="fas fa-times-circle"></i>
          </div>
          <div class="chosen-card">
            Financial Tech <i class="fas fa-times-circle"></i>
          </div>
          <div class="chosen-card">
            Entry Level <i class="fas fa-times-circle"></i>
          </div>
        </div>
      </div>

      <section class="job-list" id="jobs">
        <div class="job-card">
          <div class="job-name">
            <img
              class="job-profile"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074189/DBMS/teslalogo_o6mz2w.png"
            />
            <div class="job-detail">
              <h4>Tesla</h4>
              <h3>Mechanical Engineer</h3>
              <p>
                Tesla is in need of mechanical engineers to tend to daily needs
                of production and supply chain to maintain a supply of quality
                parts to drive unit lines.
              </p>
            </div>
          </div>
          <div class="job-label">
            <a class="label-a" href="#">
              HTML
            </a>
            <a class="label-b" href="#">
              CSS
            </a>
            <a class="label-c" href="#">
              Javascript
            </a>
          </div>
          <Link to="/applyform">APPLY FOR THIS JOB</Link>
        </div>

        <div class="job-card">
          <div class="job-name">
            <img
              class="job-profile"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074186/DBMS/ebay_v2z33l.jpg"
            />
            <div class="job-detail">
              <h4>Ebay</h4>
              <h3>Business Development</h3>
              <p>
                Milo / eBay Local is on the move, and we're looking for an
                all-star to join our Business Development team. This is a unique
                opportunity to join a team at the cutting edge of omnichannel
                retail.
              </p>
            </div>
          </div>
          <div class="job-label">
            <a class="label-a" href="#">
              HTML
            </a>
            <a class="label-b" href="#">
              CSS
            </a>
            <a class="label-c" href="#">
              Javascript
            </a>
          </div>
          <div class="job-posted">Posted 5 mins ago</div>
        </div>
        <div class="job-card">
          <div class="job-name">
            <img
              class="job-profile"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074186/DBMS/tiktok_kaudxy.jpg"
            />
            <div class="job-detail">
              <h4>Tiktok</h4>
              <h3>Digital Marketing</h3>
              <p>
                To partner with content creators to make short-form TikTok
                videos that promote your brand
              </p>
            </div>
          </div>
          <div class="job-label">
            <a class="label-a" href="#">
              HTML
            </a>
            <a class="label-b" href="#">
              CSS
            </a>
            <a class="label-c" href="#">
              Javascript
            </a>
          </div>
          <div class="job-posted">Posted 12 mins ago</div>
        </div>
        <div class="job-card">
          <div class="job-name">
            <img
              class="job-profile"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074190/DBMS/youtube-logo_dw2sxu.jpg"
            />
            <div class="job-detail">
              <h4>Youtube</h4>
              <h3>UI UX Designer</h3>
              <p>
                UI/UX Designer responsibilities include gathering user
                requirements, designing graphic elements and building navigation
                components.
              </p>
            </div>
          </div>
          <div class="job-label">
            <a class="label-a" href="#">
              HTML
            </a>
            <a class="label-b" href="#">
              CSS
            </a>
            <a class="label-c" href="#">
              Javascript
            </a>
          </div>
          <div class="job-posted">Posted an hour ago</div>
        </div>
        <div class="job-card">
          <div class="job-name">
            <img
              class="job-profile"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074189/DBMS/Amazon-Logo-Black_qpiyjt.jpg"
            />
            <div class="job-detail">
              <h4>Amazon</h4>
              <h3>Software Engineer</h3>
              <p>
                To design, develop and maintain computer software and apply
                creative programming skills to solve ongoing problems.
              </p>
            </div>
          </div>
          <div class="job-label">
            <a class="label-a" href="#">
              HTML
            </a>
            <a class="label-b" href="#">
              CSS
            </a>
            <a class="label-c" href="#">
              Javascript
            </a>
          </div>
          <div class="job-posted">Posted 2 hours ago</div>
        </div>
        <button class="job-more">More List</button>
      </section>

      <section class="join">
        <div class="join-detail">
          <h1 class="section-title">LETS START YOUR NEW JOB WITH US</h1>
          <p>SIMPLY GET HIRED </p>
        </div>
        <button class="join-button">Join Now</button>
      </section>

      <section class="featured" id="companies">
        <h1 class="section-title">Featured Companies</h1>
        <p>Vacancy</p>
        <div class="featured-wrapper">
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074186/DBMS/ebay_v2z33l.jpg"
            />
            <p>Ebay</p>
            <button class="featured-button">View 2 jobs</button>
          </div>
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074190/DBMS/youtube-logo_dw2sxu.jpg"
            />
            <p>Youtube</p>
            <button class="featured-button">View 1 jobs</button>
          </div>
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074186/DBMS/tiktok_kaudxy.jpg"
            />
            <p>Tiktok</p>
            <button class="featured-button">View 3 jobs</button>
          </div>
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074189/DBMS/teslalogo_o6mz2w.png"
            />
            <p>Tesla</p>
            <button class="featured-button">View 2 jobs</button>
          </div>
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074187/DBMS/google_nka9hj.jpg"
            />
            <p>Google</p>
            <button class="featured-button">View 2 jobs</button>
          </div>
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074191/DBMS/Facebook_mbfgns.png"
            />
            <p>Facebook</p>
            <button class="featured-button">View 4 jobs</button>
          </div>
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074187/DBMS/apple-company-logo-2_yivr5k.jpg"
            />
            <p>Apple</p>
            <button class="featured-button">View 1 jobs</button>
          </div>
          <div class="featured-card">
            <img
              class="featured-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074189/DBMS/Amazon-Logo-Black_qpiyjt.jpg"
            />
            <p>Amazon</p>
            <button class="featured-button">View 2 jobs</button>
          </div>
        </div>
      </section>

      <section class="testimoni" id="testimoni">
        <h1 class="section-title">Testimonial</h1>
        <p>Lets see what our clients say about us</p>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <h3>
                Business development is a good career choice even if it comes
                with a diverse set of challenges. It can take time to see
                positive results. But, it can still be one of the most exciting
                career choices for you. And you don’t need a degree to succeed
                in the field.
              </h3>
              <div class="testimoni-pic">
                <img src="https://res.cloudinary.com/duimmggow/image/upload/v1665074189/DBMS/johnsmith_ntq4z1.jpg" />
                <p>John Smith</p>
                <span>Business Development</span>
              </div>
            </div>
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <h3>
                Loreum ipsit dolor sit, amet consectetetur adipisicing elit
              </h3>
              <div class="testimoni-pic">
                <img src="https://res.cloudinary.com/duimmggow/image/upload/v1665074191/DBMS/taylortama_sjomdp.jpg" />
                <p>Taylor Tama</p>
                <span>Data Analyst</span>
              </div>
            </div>
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <h3>
                Loreum ipsit dolor sit, amet consectetetur adipisicing elit
              </h3>
              <div class="testimoni-pic">
                <img src="https://res.cloudinary.com/duimmggow/image/upload/v1665074194/DBMS/peter_ajtx7o.jpg" />
                <p>Peter</p>
                <span>Product Analyst</span>
              </div>
            </div>
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <h3>
                Loreum ipsit dolor sit, amet consectetetur adipisicing elit
              </h3>
              <div class="testimoni-pic">
                <img src="https://res.cloudinary.com/duimmggow/image/upload/v1665074191/DBMS/albert_john_q7sz72.jpg" />
                <p>Alber John</p>
                <span>Logistic Director</span>
              </div>
            </div>
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <h3>
                Loreum ipsit dolor sit, amet consectetetur adipisicing elit
              </h3>
              <div class="testimoni-pic">
                <img src="https://res.cloudinary.com/duimmggow/image/upload/v1665074193/DBMS/robert_qjxp0e.jpg" />
                <p>Robert</p>
                <span>Marketing Officer</span>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="blog" id="blog">
        <h1 class="section-title">Career Advices</h1>
        <p>Lear more career tips from company's recruiter</p>
        <div class="blog-wrapper">
          <div class="blog-card">
            <img
              class="blog-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074188/DBMS/enjoywork_hlycol.jpg"
            />
            <div class="blog-detail">
              <span>11 Apr 2022</span>
              <h4>How to enjoy your work</h4>
              <ul>
                <li>Take breaks</li>
                <li>Manage your workspace</li>
                <li>Enjoy the people you work with</li>
              </ul>
              <hr class="divider" />
              <a href="#" class="blog-more">
                Read
              </a>
            </div>
          </div>
          <div class="blog-card">
            <img
              class="blog-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074193/DBMS/technical_interview_iefdjl.jpg"
            />
            <div class="blog-detail">
              <span>24 Apr 2022</span>
              <h4>10 Tips for Technical interview</h4>
              <ul>
                <li>Dress for the Job or Company</li>
                <li>Listen</li>
                <li>Use Appropriate Language</li>
              </ul>
              <hr class="divider" />
              <a href="#" class="blog-more">
                Read more
              </a>
            </div>
          </div>
          <div class="blog-card">
            <img
              class="blog-image"
              src="https://res.cloudinary.com/duimmggow/image/upload/v1665074193/DBMS/time-management_rflksu.jpg"
            />
            <div class="blog-detail">
              <span>11 May 2022</span>
              <h4>Managing Time Effectively</h4>
              <ul>
                <li>Start your day with a plan</li>
                <li>Prioritize the most important tasks</li>
                <li>Limit distractions</li>
              </ul>
              <hr class="divider" />
              <a href="#" class="blog-more">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
