import React from "react";
import "./App.css";

import { Mouse } from "./mouse/Mouse";
import Cat from "./cat/Cat";
import WithMouse from "./WithMouse/WithMouse";
import CatHooks from "./cat/CatHooks";
import withRenderPropsMouse from "./withRenderPropsMouse/withRenderPropsMouse";

function App() {
  return (
    <div className="App">
      <Mouse
        render={position => <Cat type={"Render Props"} position={position} />}
      ></Mouse>
      {withMouse(Cat)}
      <CatHooks></CatHooks>
      {withRenderPropsMouse(Cat)}
    </div>
  );
}

export default App;
