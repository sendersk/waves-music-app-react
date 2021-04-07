import React, { useState } from "react";
import data from "./data";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
