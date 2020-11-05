import React, { useRef } from "react";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array"
import { select, selectAll } from "d3"

import AxisLeft from './AxisLeft';
import AxisBottom from './AxisBottom';

function RandomData() {
  const data = [...Array(100)].map((e, i) => {
    return {
      x: Math.random() * 40,
      y: Math.random() * 40,
      temparature: Math.random() * 500
    };
  });
  return data;
}

function Scatter() {
  // const svgRef = useRef();

  const data = RandomData(),
    w = 600,
    h = 600,
    margin = {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40
    };

  const width = w - margin.right - margin.left,
    height = h - margin.top - margin.bottom;

  // Scaling to WEBPAGE, data    0,0 is bottomleft corner,
  //                     webpage 0,0 is top   left corner
  const xScale = scaleLinear()
    .domain(extent(data, d => d.x))
    .range([0, width]); // left to right is same

  const yScale = scaleLinear()
    .domain(extent(data, d => d.y))
    .range([height, 0]); // bottom to top is inverted

    // data is [ array of {x,y,temp} objects ]
  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={5}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      style={{ fill: "darkblue" }}
    />
  ));
  // THIS OVERWRITES Circles.
  // select(svgRef.current).append("rect")
  //   .attr("width", "100%")
  //   .attr("height", "100%")
  //   .attr("fill", "pink")
  return (
    <div>
      <h1>React + D3</h1>
      <svg width={w} height={h}>
        {/* Background color */}
        <rect width="100%" height="100%" fill="white" />
        {/* Data laid over background */}
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisLeft yScale={yScale} width={width} />
          <AxisBottom xScale={xScale} height={height} />
          {circles}
        </g>
      </svg>
    </div>
  );
}

export default Scatter;