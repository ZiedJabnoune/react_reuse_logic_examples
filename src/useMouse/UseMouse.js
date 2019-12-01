import React, { useState } from "react";

const useMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMousePosition = e => {
    setPosition({ x: e.clientX, y: e.clientX });
  };

  return { position, handleMousePosition };
};

export default useMouse;