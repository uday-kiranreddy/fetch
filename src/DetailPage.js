import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { BsFillBackspaceFill } from "react-icons/bs";
import "./Detail.css";

function DetailPage() {
  //params
  const { login } = useParams();
  const [hireable, setHireable] = useState(false);
  const [user, setUser] = useState([]);
  //useeffect
  useEffect(() => {
    fetchData();
  }, []);

  // fetch function
  const fetchData = async () => {
    try {
      const URL = `https://api.github.com/users/${login}`;
      const response = await fetch(URL);
      const data = await response.json();
      if (data.hireable === null) {
        setHireable(true);
      }
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* //navbar */}
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
      {/* whole container */}

      <div className="top-two">
        <Link to="/">
          <button className=" btn-back-to-search" type="submit">
            Back to Search
          </button>
        </Link>
        {hireable && (
          <h4>
            Hireable:
            <BsFillBackspaceFill className="hireable" />
          </h4>
        )}
      </div>

      {/* the main hero section  */}
      <div className="main-body">
        <div className="grid-box">
          <div className="left-grid">
            <img src={user.avatar_url} alt="" />
            <h2>{user.login}</h2>
            <p>{user.location}</p>
          </div>
          <div className="right-grid">
            <h3>Bio</h3>
            <p>{user.bio}</p>
            <a href={user.html_url}>
              <button className="profile-btn" type="submit">
                Visit Github Profile
              </button>
            </a>
            <h4>
              Website: <a href={user.blog}>{user.blog}</a>{" "}
            </h4>
          </div>
        </div>
        <div className="four-boxes">
          <div className="solo-box" id="one">
            <button>Followers: {user.followers}</button>
          </div>
          <div className="solo-box" id="two">
            <button>Following: {user.following}</button>
          </div>
          <div className="solo-box"id="three" >
            <button>Public Repos: {user.public_repos}</button>
          </div>
          <div className="solo-box"id="four">
            <button>Public Gists: {user.public_gists}</button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default DetailPage;
