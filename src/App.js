import React from "react";
import "./App.css";

import {Mouse} from "./mouse/Mouse";
import Cat from "./cat/Cat";
import WithMouse from './WithMouse/WithMouse'
import CatHooks from './cat/CatHooks';

function App() {
  return (
    <div className="App">
      <Mouse render={(position) => <Cat type={"Render Props"} position={position}/>}></Mouse>
      {WithMouse(Cat)}
      <CatHooks></CatHooks>
    </div>
  );
}

export default App;
