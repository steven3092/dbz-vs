import React from 'react'
import Layout from "./layout.js";
import Game from "./game.js";


function App() {
  document.title = "Dbz-VS"
  return (
    <div>
      <Layout />
      <Game />
    </div>
  );
}

export default App;
