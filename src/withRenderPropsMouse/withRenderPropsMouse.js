import React from "react";
import {Mouse} from "../mouse/Mouse";

const withRenderPropsMouse = Component => {
  return (
    <Mouse
      render={position => (
        <Component type="withRenderPropsMouse" position={position}></Component>
      )}
    ></Mouse>
  );
};

export default withRenderPropsMouse;
