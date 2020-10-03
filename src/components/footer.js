import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
// A bar at the bottom of the app with the following buttons in order form left to right:
// Progress; Profile; Emergency; Rewards; Task
function Footer() {
  return (
    <Footer>
      <nav>
        <Link to="./progress-page">Progress</Link>
        <Link to="./profile-page">Profile</Link>
        <Link to="./emergency-page">Emergency</Link>
        <Link to="./rewards-page">Rewards</Link>
        <Link to="./tasks-page">Tasks</Link>
      </nav>
    </Footer>
  );
}

export default Footer;
