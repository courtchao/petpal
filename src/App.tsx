import React from 'react';
import logo from './logo.svg';
import './App.css';
import PetPhoto from './PetPhoto';
import placeholderPhoto from './American-Eskimo-Dog.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Hello
        </p>
        <PetPhoto image={placeholderPhoto}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
