import React from "react";
import Player from "./components/Player";
import Notification from "./components/Notification";
import Settings from "./components/Settings";

const App = () => {
  return (
    <div className="container bg-dark border border-primary">
      <header>
        <h2 className="heading p-3 text-center text-light bg-dark rounded">
          Not <span className="text-primary">Zoom</span>
        </h2>
      </header>
      <Player />
      <Settings>
        <Notification />
      </Settings>
    </div>
  );
};

export default App;
