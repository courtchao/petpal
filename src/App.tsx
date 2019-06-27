import React from 'react';
import logo from './logo.svg';
import './App.css';
import PetProfile from './PetProfile';
import placeholderPhoto from './American-Eskimo-Dog.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Hello
        </p>
        <PetProfile
          image={placeholderPhoto}
          name="Doge"
          description="I am doge I am frendo"/>
      </header>
    </div>
  );
}

export default App;
