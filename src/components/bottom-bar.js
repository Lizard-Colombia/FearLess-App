import React from "react";
import { Link } from "react-router-dom";
import "./bottom-bar.css";
import progress from "../images/progress.png";
import profile from "../images/profile.png";
import emergency from "../images/emergency.png";
import rewards from "../images/rewards.png";
import tasks from "../images/tasks.png";

// A bar at the bottom of the app with the following buttons in order form left to right:
// Progress; Profile; Emergency; Rewards; Task
function BottomBar() {
  return (
    <div>
      <nav>
        <table>
          <tr className="Bottom-Bar--1stRow">
            <td>
              <Link to="./progress-page">
                <img
                  src={progress}
                  alt="Progress Chart"
                  width="30%"
                  text-align="center"
                />
              </Link>
            </td>

            <td>
              {" "}
              <Link to="./profile-page">
                <img
                  src={profile}
                  alt="Individual Profile"
                  width="30%"
                  text-align="center"
                />
              </Link>
            </td>
            <td>
              <Link to="./emergency-page">
                <img
                  src={emergency}
                  alt="Red Cross Symbol"
                  width="30%"
                  text-align="center"
                />
              </Link>
            </td>
            <td>
              {" "}
              <Link to="./rewards-page">
                <img
                  src={rewards}
                  alt="Reward Medallion"
                  width="30%"
                  text-align="center"
                />
              </Link>
            </td>
            <td>
              {" "}
              <Link to="./tasks-page">
                <img
                  src={tasks}
                  alt="Task List"
                  width="30%"
                  text-align="center"
                />
              </Link>
            </td>
          </tr>

          <tr className="Bottom-Bar--2ndRow">
            <td>
              <span>progress</span>
            </td>
            <td>
              <span>profile</span>
            </td>
            <td>
              <span>emergency</span>
            </td>
            <td>
              <span>rewards</span>
            </td>
            <td>
              <span>tasks</span>
            </td>
          </tr>
        </table>
      </nav>
    </div>
  );
}

export default BottomBar;
