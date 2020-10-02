import React, { useState } from "react";
import WelcomeMessage from "./welcome-message";

function App() {
  const [userName, setUserName] = useState("");
  // const [fearName, setFearName] = fearName("");
  const onUserNameChange = (event) => {
    setUserName(event.target.value);
    // const onFearName = (event) => {
    //   setFearName(event.target.value);
    // };
  };
  return (
    <main>
      <header>
        <nav>
          <a href="/">
            <span role="img" aria-label="bamboo">
              🎍
            </span>
          </a>{" "}
          |{" "}
          <a href="/">
            <span>FearLess</span>
          </a>{" "}
          |
          <a href="./settings-page">
            <span role="img" aria-label="gear">
              ⚙
            </span>
          </a>
        </nav>
      </header>
      <div>
        <button>Add New Item</button>
        <button>Filter List</button>
      </div>
      <h1>FearLess</h1>
      <WelcomeMessage greeting="Welcome" name=""></WelcomeMessage>
      <h3>
        First, lets get to know each other. Please let me know what you would
        like me to call you.
      </h3>
      <form>
        <label>
          Username:{" "}
          <input type="text" value={userName} onChange={onUserNameChange} />
        </label>
        <input type="submit" />
      </form>

      {/* have the form now Welcome the user - by name -  */}

      <h2>Hi, {userName}! It is nice to meet you.</h2>
      <h3>
        We are now going to build a list of fears that we can work on together.
      </h3>
      {/* form for entering in fears */}
      <h2>
        <b>Instructions: </b> List a word or brief description of your fear in
        the large field and then list a number between 1-10 in the small field
        to show the power of this fear.{" "}
        <em>Example: 1 is a mild fear and 10 is totally over-powering.</em>
        <form>
          <ul>
            <li>
              <label>
                Fear: {""}
                <input type="text" />
              </label>
            </li>
            <li>
              <label>
                Rank {""}
                <input type="number" />
              </label>
            </li>
          </ul>
        </form>
        <h2>Text input fields</h2>
      </h2>
      <footer>
        <div>
          <button>Progress</button>

          <button>Profile</button>

          <button>Emergency</button>

          <button>Rewards</button>

          <button>Tasks</button>
        </div>
      </footer>
    </main>
  );
}

export default App;
