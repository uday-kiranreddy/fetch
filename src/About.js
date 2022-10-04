import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import Nav from "./Nav";
import "./About.css";

function About() {
  return (
    <>
      <nav className="navbar">
        <div id="logo_text">
          <FaGithub className="github-icon" />
          <h2>Github Finder</h2>
        </div>
        <div>
          <ul className="unordered-list">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="links">
                About Us
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
      <div className="About">
        <h1>About This App.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae itaque
          sequi sint voluptatem ducimus ea perferendis non corporis iusto earum
          iste numquam doloremque tempora reprehenderit quisquam, unde dolor eum
          recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Animi ut reprehenderit ipsum, ducimus optio aspernatur eaque provident
          explicabo quidem nisi accusantium? Illum repellendus aspernatur qui
          fuga deleniti dolorum dolores veniam?
        </p>
      </div>
    </>
  );
}

export default About;
