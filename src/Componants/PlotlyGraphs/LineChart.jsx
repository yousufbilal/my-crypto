import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-dist";
import { CoinID } from "../../HelperFile/helper";

const LineChart = ({ coinPrice }) => {
  const [testState, setTestState] = useState();

  // useEffect(() => {
  //   setTestState(
  //     coinPrice?.prices?.map(([timestamph, prices]) => console.log(prices))
  //   );
  // }, [coinPrice]);

  useEffect(() => {
    const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    const data = [
      {
        x: xArray,
        y: yArray,
        mode: "lines"
      }
    ];

    const layout = {
      xaxis: { range: [40, 1000000000000], title: "Square Meters" },
      yaxis: { range: [40, 1000000000000], title: "Price in Millions" },
      title: "Coin Prices"
    };

    Plotly.newPlot("myPlot", data, layout);
  }, []);

  return <div id="myPlot" style={{ width: "500px", height: "500px" }}></div>;
};

export default LineChart;
