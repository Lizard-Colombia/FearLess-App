import React from "react";

function WelcomeMessage(props) {
  const { name } = props;
  return <p> Welcome, {name} = props;</p>;
}

export default WelcomeMessage;
