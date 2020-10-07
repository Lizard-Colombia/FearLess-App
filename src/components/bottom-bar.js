import React from "react";
import { Link } from "react-router-dom";

// A bar at the bottom of the app with the following buttons in order form left to right:
// Progress; Profile; Emergency; Rewards; Task
function BottomBar() {
  return (
    <BottomBar>
      
      <nav className="Navigation-Footer">
        <Link to="./progress-page"><span role="img" aria-label="progress">
            📈
          </span>Progress</Link>
        <Link to="./profile-page"><span role="img" aria-label="profile">
            👤
          </span>Profile</Link>
        <Link to="./emergency-page"><span role="img" aria-label="emergency">
            🏥
          </span>Emergency</Link>
        <Link to="./rewards-page"><span role="img" aria-label="rewards">
            🏆
          </span>Rewards</Link>
        <Link to="./tasks-page"><span role="img" aria-label="tasks">
            ✅
          </span>Tasks</Link>
      </nav>
    </BottomBar>
  );
}

export default BottomBar;
