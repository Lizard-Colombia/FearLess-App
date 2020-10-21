import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import home from "../images/home.png";
import logo from "../images/logo.png";
import settings from "../images/settings.png";

// A bar at the top with the following items from left to right:
// Logo Icon; App Name; Settings Icon (a gear)

function Header() {
  return (
    <header className="Header-Nav__Bar">
      <nav>
        <Link to="/">
          <img
            src={home}
            alt="Armored Knight"
            width="15%"
            text-align="center"
          />
        </Link>{" "}
        <img src={logo} alt="Armored Knight" width="40%" text-align="center" />
        <Link to="./settings-page">
          <img
            src={settings}
            alt="Armored Knight"
            width="15%"
            text-align="center"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
