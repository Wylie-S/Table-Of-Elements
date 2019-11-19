import React from "react";
import "../css/Element.scss";

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usedElements: []
    };
  }
  //
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
export default Element;
