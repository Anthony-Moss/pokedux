import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './containers/PokedexContainer';
import VisibilityButton from './containers/VisibilityButtonContainer';

function App() {
  return (
    <div className="App">
      <h1>PokeThings</h1>
      <VisibilityButton />
      <Pokedex />
      
    </div>
  );
}

export default App;
