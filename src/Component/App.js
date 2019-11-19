import React, { Component } from "react";
import { Box } from "../Component/Table.jsx";
import "../css/App.css";
// import classnames from "classnames";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
          <div class="grid-item">{<Box />}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
