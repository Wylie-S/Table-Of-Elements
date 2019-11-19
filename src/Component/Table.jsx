import React from "react";
// import data from "../Data/data.json";

const Box = props => {
  const style = {
    gridColumn: props.gridPosition,
    gridColumnEnd: props.gridPosition
  };
  const name = "El name";
  const num = "El num";
  const mass = "el mass";
  const symbol = "el sym";

  return (
    <div className="Element" style={style}>
      <div className="Element__atomicMass">{name}</div>
      <div className="Element__symbol">{num}</div>
      <div className="Element__number">{mass}</div>
      <div className="Element__name">{symbol}</div>
    </div>
  );
};
export { Box };
