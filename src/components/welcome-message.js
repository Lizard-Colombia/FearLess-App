import React from "react";

function WelcomeMessage(props) {
  const { greeting, name } = props;
  return (
    <h2 className="welcome-message">
      {greeting}
      {name}!
    </h2>
  );
}

export default WelcomeMessage;
