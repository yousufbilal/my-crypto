import React, { useEffect } from "react";
import Plotly from "plotly.js-dist";

const LineChart = ({coinHistoric}) => {
  // console.log(coinHistoric.prices)
  useEffect(() => {
    const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    // Define Data
    const data = [
      {
        x: xArray,
        y: yArray,
        mode: "lines"
      }
    ];

    // Define Layout
    const layout = {
      xaxis: { range: [40, 160], title: "Square Meters" },
      yaxis: { range: [5, 16], title: "Price in Millions" },
      title: "Coin Prices"
    };

    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout);
  }, []); // Empty dependency array ensures this runs only once

  return <div id="myPlot" style={{ width: "100%", maxWidth: "700px" }}></div>;
};

export default LineChart;
