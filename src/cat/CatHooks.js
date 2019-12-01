import React from "react";
import useMouse from "../useMouse/UseMouse";

const CatHooks = () => {
  const { position, handleMousePosition } = useMouse();

  return (
    <div
      onMouseMove={handleMousePosition}
      style={{
        backgroundColor: "darkcyan",
        height: "100px",
        border: "1px  solid"
      }}
    >
      <h1> useMouse : {position.x} {position.y}</h1>
    </div>
  );
};

export default CatHooks;
