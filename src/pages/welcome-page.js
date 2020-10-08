import React from "react";
import "../components/welcome-page.css";

function WelcomePage() {
  return (
    <>
      <h1>Welcome to FearLess!</h1>
      <h3>
        This App is being designed to help you work through your fears and
        anxieties at a pace that works for you.
      </h3>
      <h3>
        Let's begin your journey to becoming more FearLess by building a list
        the fears you would like to work on.
      </h3>
      <button className="BeginList-Button">Begin My List Now</button>
      <br></br>
      <hr></hr>
    </>
  );
}

export default WelcomePage;
