import React from "react";

function WelcomeMessage(props) {
  const { name } = props;
  return <p> {name}</p>;
}

export default WelcomeMessage;
