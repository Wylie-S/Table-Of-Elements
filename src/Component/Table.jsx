import React from "react";
// import data from "../Data/data.json";

function Table(props) {
  const style = {
    gridColumn: props.gridPosition,
    gridColumnEnd: props.gridPosition
  };

  return (
    <div className="Element" style={style}>
      <div className="Element__atomicMass">{props.element.atomic}</div>
      <div className="Element__symbol">{props.element.symbol}</div>
      <div className="Element__name">{props.element.name}</div>
      <div className="Element__number">{props.element.mass}</div>
    </div>
  );
}
export default Table;
