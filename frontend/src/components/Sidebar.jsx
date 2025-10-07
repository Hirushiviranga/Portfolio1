import React from 'react';
import Profile from '../assets/img/profile-img.png';

const Sidebar = () => {
  return (
    <aside className="sidebar d-flex flex-column">
      <div className="profile text-center">
        <img src={Profile} alt="Profile" className="img-fluid rounded-circle" />
        <h1 className="text-light mt-2">
          <a href="#hero">Hirushi Siriwardhana</a>
        </h1>
        <div className="social-links mt-3">
          <a href="https://linkedin.com/in/hirushi-siriwardhana-392754285" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Hirushiviranga" className="github">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu mt-4">
        <ul>
          <li>
            <a href="#hero" className="nav-link scrollto active">
              <i className="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto">
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto">
              <i className="bx bx-file-blank"></i> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto">
              <i className="bx bx-book-content"></i> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto">
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
