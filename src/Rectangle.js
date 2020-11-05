import React, { Component } from "react";
import "./App.css";
import * as d3 from "d3";

class Rectangle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1,2,3,4,5,6,7,8,9]
    }; // create a small array to use as test dataset
  }

  componentDidMount() {
    this.createSvgContainer();
  }

  componentDidUpdate() {
    this.createSvgContainer();
  }

  createSvgContainer = () => {
    // ...d3 code to update our SVG
    const svg = this.svg;

    const selection = d3
      .select(svg)
      .attr("width", 500)
      .attr("height", 400)
      .selectAll("rect")
      .data(this.state.data);
    selection
      .enter() // selects all data points without a corresponding element	
      .append("rect") // create new element for each data value
      .merge(selection) // calling this enables us to target both existing and new elements
      .attr("class", "new-element") // set the class of new elements to 'new-element'
      .transition() // add a cool transition to the below attributes
      .duration(1000) // duration of transition
      .attr("width", value => value * value/5 + value) // set rect properties
      .attr("height", value => value * value/10 + value) 
      .attr("x", value => value * value) 
      .attr("y", value => (value * value * Math.sqrt(value)) / 20) 
      .attr("stroke", "blue") // set styles
      .attr("stroke-width", "3")
      .attr("fill", "transparent");
    selection
      .exit() // target elements that are no longer needed
      .transition() // enable cool transitions
      .attr("width", 0) // set final styles before removing
      .attr("height", 0)
      .remove(); // remove element from DOM
  }
  update = () => {
    const newData = this.state.data.map(value => value + 5);
    this.setState({ data: newData });
  };
  
  removeLast = () => {
    const newData = [...this.state.data];
    newData.pop();
    this.setState({ data: newData });
  };

  render() {
    return (
      <div
        style={{ border: "2px solid black", padding: "0px", width: "500px" }}
      >
        <svg ref={svg => (this.svg = svg)}></svg>
        <br />
        <button onClick={this.update}>Update</button>
        <br />
        <button onClick={this.removeLast}>Remove</button>
      </div>
    );
  }
}
export default Rectangle;