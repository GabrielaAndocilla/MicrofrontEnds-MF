import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CharacterGrid from "./modules/CharacterGrid";

const App = () =>{
  return(<div>
    <CharacterGrid name={"harryPotter"}/>
  </div>)
};


ReactDOM.render(<App />, document.getElementById("app"));
