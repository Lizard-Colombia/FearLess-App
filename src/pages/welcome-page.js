import React from "react";
import { Link } from "react-router-dom";
import "../components/welcome-page.css";
import frog from "../images/frog.jpg";

function WelcomePage() {
  return (
    <>
      <h1>Welcome to FearLess!</h1>

      <h4>
        This App is being designed to help you work through your fears and
        anxieties at a pace that works for you.
      </h4>
      <img src={frog} alt="Frog among lilly pads" width="400" />
      <h4>
        Let's begin your journey to becoming more <b>FearLess</b> by building a
        list of the fears that you would like to work on.
      </h4>
      <Link to="./fear-list-page" className="Welcome-FearList__Button">
        Go to My Fear List Now
      </Link>

      <br></br>
      <hr></hr>
    </>
  );
}

export default WelcomePage;
