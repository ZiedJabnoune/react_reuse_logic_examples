import React from "react";
import "./App.css";

import Mouse from "./mouse/Mouse";
import MouseTwo from "./mouse/MouseTwo";
import Cat from "./cat/Cat";
import withMouse from "./withMouse/withMouse";
import CatHooks from "./cat/CatHooks";
import withRenderPropsMouse from "./withRenderPropsMouse/withRenderPropsMouse";

function App() {
  return (
    <div className="App">
      <Mouse
        render={position => <Cat type={"Render Props"} position={position} />}
      ></Mouse>
      {MouseTwo(Cat)}
      <CatHooks></CatHooks>
      {withMouse(Cat)}
      {withRenderPropsMouse(Cat)}
    </div>
  );
}

export default App;
