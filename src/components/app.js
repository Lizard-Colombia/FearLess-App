import React, { useState } from "react";
import WelcomeMessage from "./welcome-message";

function App() {
  const [userName, setUserName] = useState("");
  const onUserNameChange = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };
  return (
    <main>
      <h1>FearLess</h1>
      <WelcomeMessage greeting="Welcome" name="Sam I Am"></WelcomeMessage>
      <h3>
        Let's begin by creating a list of fears that you would like to work on
        together.
      </h3>
      <form>
        <label>
          Username:{" "}
          <input type="text" value={userName} onChange={onUserNameChange} />
        </label>
        <input type="submit" />
      </form>
    </main>
  );
}

export default App;
