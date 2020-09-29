import React from "react";
import WelcomeMessage from "./welcome-message";

function App() {
  return (
    <main>
      <h1>FearLess</h1>
      <WelcomeMessage greeting="Welcome" name="Sam I Am"></WelcomeMessage>
      {/* <WelcomeMessage greeting="Good Morning" name="Class"></WelcomeMessage> */}
    </main>
  );
}

export default App;
