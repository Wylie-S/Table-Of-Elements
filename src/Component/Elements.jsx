import React from "react";
import "../css/Element.scss";
import Table from "./Table";
import data from "../Data/data.json";

console.log(data);
// console.log(elements);
let maximumRows = 18;
class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usedElements: []
    };
  }

  createElements(data, offsetToParent) {
    let elements = [];
    // incrementing in the array
    for (let i = 0; i < data.length; i++) {
      // The push() method adds new items to the end of an array, and returns the new length.
      elements.push(
        <Table
          key={i}
          element={data[i]}
          gridPosition={offsetToParent + i + 1}
        />
      );
    }
    return elements;
  }

  leftRow(data) {
    return <>{this.createElements(data, 0)}</>;
  }

  centerRow(data) {
    return <>{this.createElements(data, 2)}</>;
  }

  rightRow(data) {
    return <>{this.createElements(data, maximumRows - data.length)}</>;
  }

  createFromData(i) {
    if (i < 0 || i > data.elements.length) {
      return {
        symbol: "",
        atomic: -1,
        mass: -1,
        name: ""
      };
    }
    return {
      symbol: data.elements[i].symbol,
      atomic: data.elements[i].number.toFixed(2),
      mass: data.elements[i].atomic_mass.toFixed(2),
      name: data.elements[i].name
    };
  }

  createElementsInRange(start, end) {
    let elements = [];
    for (let i = start - 1; i < end; ++i) {
      elements.push(this.createFromData(i));
    }
    return elements;
  }
  // the range for grid spaces in reference to the table 3 sections
  // 3-4                                            5-----10
  // 11-12                                         13-----18
  // 19-36
  // 37-54
  // 55-56 == 72----------------------------------------- 86
  // 87 88 == 104----------------------------------------118
  //      57--------------------------------------------- 71
  //      89---------------------------------------------103
  // https://css-tricks.com/snippets/css/complete-guide-grid/
  // actual periodic table
  allElements() {
    return (
      <>
        {this.leftRow(this.createElementsInRange(1, 1))}
        {this.rightRow(this.createElementsInRange(2, 2))}
        {this.leftRow(this.createElementsInRange(3, 4))}
        {this.rightRow(this.createElementsInRange(5, 10))}
        {this.leftRow(this.createElementsInRange(11, 12))}
        {this.rightRow(this.createElementsInRange(13, 18))}
        {this.leftRow(this.createElementsInRange(19, 36))}
        {this.leftRow(this.createElementsInRange(37, 54))}
        {this.leftRow(this.createElementsInRange(55, 56))}
        {this.rightRow(this.createElementsInRange(72, 86))}
        {this.leftRow(this.createElementsInRange(87, 88))}
        {this.rightRow(this.createElementsInRange(104, 118))}
        {this.centerRow(this.createElementsInRange(57, 71))}
        {this.centerRow(this.createElementsInRange(89, 103))}
      </>
    );
  }

  render() {
    //return all emlements for table
    let allElements = this.allElements();
    return (
      <div>
        <div className="Table">{allElements}</div>
      </div>
    );
  }
}

export default Element;
