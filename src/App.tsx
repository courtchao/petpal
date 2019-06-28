import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PetProfile from "./PetProfile";
import placeholderPhoto from "./American-Eskimo-Dog.jpg";
import ApprovalButtons from "./ApprovalButtons";

function App(): JSX.Element {
  return (
    <div className="App">
      <ApprovalButtons />
      <p>Hello Hello</p>
      <PetProfile
        image={placeholderPhoto}
        name="Doge"
        description="I am doge I am frendo"
      />
    </div>
  );
}

export default App;
