import React from "react";
import { Link } from "react-router-dom";

// A bar at the bottom of the app with the following buttons in order form left to right:
// Progress; Profile; Emergency; Rewards; Task
function BottomBar() {
  return (
    <nav className="Navigation-Footer">
      <Link to="./progress-page">
        <span role="img" aria-label="progress">
          📈
        </span>
      </Link>
      <Link to="./profile-page">
        <span role="img" aria-label="profile">
          👤
        </span>
      </Link>
      <Link to="./emergency-page">
        <span role="img" aria-label="emergency">
          🏥
        </span>
      </Link>
      <Link to="./rewards-page">
        <span role="img" aria-label="rewards">
          🏆
        </span>
      </Link>
      <Link to="./tasks-page">
        <span role="img" aria-label="tasks">
          ✅
        </span>
      </Link>
    </nav>
  );
}

export default BottomBar;
