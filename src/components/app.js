import React from "react";
import WelcomeMessage from "./welcome-message";

function App() {
  return (
    <main>
      <h1>FearLess</h1>
      <WelcomeMessage greeting="Welcome" name="Sam I Am"></WelcomeMessage>
      {/* <WelcomeMessage greeting="Good Morning" name="Class"></WelcomeMessage> */}
      <h3>
        Let's begin by creating a list of fears that you would like to work on
        together.
      </h3>
    </main>
  );
}

export default App;
