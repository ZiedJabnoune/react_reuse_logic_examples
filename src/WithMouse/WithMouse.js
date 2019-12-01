import React from "react";

const withMouse = Component => {
  return () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMousePosition = e => {
      setPosition({ x: e.clientX, y: e.clientX });
    };

    return (
      <div
        onMouseMove={handleMousePosition}
        style={{
          backgroundColor: "darkkhaki",
          height: "100px",
          border: "1px  solid"
        }}
      >
        <Component type={"HOC/HOC"} position={position}></Component>
      </div>
    );
  };
};

export default withMouse;
