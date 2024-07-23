import React, { useEffect } from "react";
import Plotly from "plotly.js-dist";

const LineChart = () => {

  let test = {
    prices: [
      [11, 22],
      [22, 50],
      [50, 100],
      [22, 43]
    ],
    price2: [
      [30, 60],
      [40, 80],
      [60, 120],
      [30, 50]
    ]
  };

  const testFunc = () => {
    // console.log(coinPrice)
    // console.log(coinPrice) //this is working
    // for (let i = 0; i < coinPrice.length; i++) {
    //   console.log(coinPrice[i].prices);
    // }
  };

  useEffect(() => {
    testFunc();
  }, []);

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
      xaxis: { range: [40, 160], title: "Square Meters" },
      yaxis: { range: [5, 16], title: "Price in Millions" },
      title: "Coin Prices"
    };

    Plotly.newPlot("myPlot", data, layout);
  }, []);

  return <div id="myPlot" style={{ width: "800px", height: "600px" }}></div>;
};

export default LineChart;
