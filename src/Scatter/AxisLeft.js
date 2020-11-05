import React from "react";

function AxisLeft({ yScale, width }) {
    const textPadding = -25

    return <>{
        yScale.ticks(7).map((d, i) => (
            <g key={i} className="y-tick">
                {/* Horizontal grid lines */}
                <line
                    style={{ stroke: "#e4e5eb" }}
                    y1={yScale(d)}
                    x1={0}
                    x2={width}
                    y2={yScale(d)}
                />
                <text
                    style={{ fontSize: 12 }}
                    x={textPadding}
                    dy=".32em"
                    y={yScale(d)}
                >
                    {d} {/** Print domain value */}
                </text>
            </g>
        ))
    }</>;
}

export default AxisLeft;