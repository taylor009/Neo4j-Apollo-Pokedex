import React, { useState } from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";

function App() {
  return (
    <div className="App">
        <h1>Pokedex</h1>
        <CardList />
    </div>
  );
}

export default App;
