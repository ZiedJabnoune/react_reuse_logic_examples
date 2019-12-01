import React, { useState } from "react";

const Mouse = props => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMousePosition = e => {
    setPosition({ x: e.clientX, y: e.clientX });
  };

  return (
    <div
      onMouseMove={handleMousePosition}
      style={{
        backgroundColor: "azure",
        height: "100px",
        border: "1px  solid"
      }}
    >
      {props.render(position)}
    </div>
  );
};

export default Mouse;
