import React from "react";
import { Link } from "react-router-dom";
// import "./header.css";

// A bar at the top with the following items from left to right:
// Logo Icon; App Name; Settings Icon (a gear)

function Header() {
  return (
    <header>
      <nav>
        <Link to="./welcome-page">
          <span role="img" aria-label="bamboo">
            🎍
          </span>
        </Link>{" "}
        |{" "}
        <Link to="./fear-list-page">
          <span>FearLess</span>
        </Link>{" "}
        |
        <Link to="./settings-page">
          <span role="img" aria-label="gear">
            ⚙
      
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
