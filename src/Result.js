import React from "react";
import { Link } from "react-router-dom";

function Result({ users }) {
  return (
    <div className="result-container">
      <div key={users.id} className="single-box">
        <img src={users.avatar_url} alt="" />
        <h3> {users.login}</h3>
        <Link to='/detailpage' users={users}>
          <button className="single-box-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default Result;
