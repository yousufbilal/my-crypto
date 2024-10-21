import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import "./MyResponsiveLine.css";
import { LocalStorageFunc } from "../Atoms/LocalStorageFunc";

const MyResponsiveLine = ({ coinPrice }) => {
  const [dataPoints, setDataPoints] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));

  console.log(storedUser.prices);

  const testData = [
    [1728486875212, 61935.669410618335],
    [1728489898867, 62273.12429552298],
    [1728493501805, 61752.45976427412],
    [1728497307131, 61786.15413301724],
    [1728500750631, 61117.826773189954]
  ];

  // useEffect(() => {
  //   const tempCurrentList = JSON.parse(JSON.stringify(LocalStorageFunc()));
  //   console.log(tempCurrentList);
  // }, []);

  // useEffect(() => {
  //   const formattedData = coinPrice?.prices?.map((value) => ({
  //     x: new Date(value[0]).toISOString(),
  //     y: value[1]
  //   }));

  //   setDataPoints(formattedData);
  // }, [coinPrice]);

  useEffect(() => {
    const formattedData = storedUser.prices?.map((value) => ({
      x: new Date(value[0]).toISOString(),
      y: value[1]
    }));
    setDataPoints(formattedData);
  }, []);

  const data = [
    {
      id: "Prices",
      color: "#00ff00",
      data: dataPoints
    }
  ];

  return (
    <div style={{ height: "100vh" }} className="nivo-line-container">
      <ResponsiveLine
        style={{ width: "100 vw" }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Timestamp",
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Price",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default MyResponsiveLine;
