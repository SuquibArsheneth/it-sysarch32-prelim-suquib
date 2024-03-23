import React from "react";
import Header from "./Header.jsx";

import Pokedex from "./Pokedex.jsx";



function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Pokedex />
      </div>
    
    </div>
  );
}

export default App;