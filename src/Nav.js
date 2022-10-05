import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./About";
import "./Nav.css";
import Result from "./Result";

function Nav() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  //fetching function
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const URL = `https://api.github.com/users/${input}`;
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
      console.log(data)
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div id="logo_text">
          <FaGithub className="github-icon" />
          <h3>Github Finder</h3>
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

      <form onSubmit={(e) => fetchData(e)}>
        <input
          onChange={(e) => setInput(e.target.value)}
          id="input-form"
          placeholder="Search Users..."
        />
        <button className="btn" type="submit">
          Search
        </button>
        
      </form>
      <div className={`${loading && "loader"}`}></div>
      {show && <Result users={users} />}
    </>
  );
}

export default Nav;
