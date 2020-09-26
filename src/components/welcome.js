import React from "react";
//This is the first screen the user sees - a landing page
function WelcomeMessage(props) {
  const { greeting, name } = props;
  return (
    <p className="welcome-message">
      {" "}
      {greeting}, {name}!
    </p>
  );
}

export default WelcomeMessage;
