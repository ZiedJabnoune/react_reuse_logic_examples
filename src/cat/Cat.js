import React from "react";

const Cat = props => {
  return (
    <h1>
      {props.type} : {props.position.x} {props.position.y}
    </h1>
  );
};

export default Cat;
