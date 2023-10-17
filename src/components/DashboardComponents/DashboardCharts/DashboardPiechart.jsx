// import React from "react";
// import "./DashboardBarchart.scss";

// const DashboardPiechart = () => {
//   return (
//     <>
//       <h1>Pie cahrt</h1>
//     </>
//   );
// };

// export default DashboardPiechart;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie, measureTextWidth } from "@ant-design/plots";

const DashboardPiechart = () => {
  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(
      text,
      style
    );
    const R = containerWidth / 4;

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(
            Math.pow(R, 2) /
              (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
          )
        ),
        1
      );
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
      scale < 1 ? 1 : "inherit"
    };">${text}</div>`;
  }

  const data = [
    {
      type: "New Coustomers",
      value: 65,
    },
    {
      type: "Old Coustomers",
      value: 55,
    },
    {
      type: "Coustomers",
      value: 100,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.7,
    meta: {
      value: {
        formatter: (v) => `${v} ¥`,
      },
    },
    label: {
      type: "inner",
      offset: "-60%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 5) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : "New Customers";
          return renderStatistic(d, text, {
            fontSize: 20,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: "22px",
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum
            ? `¥ ${datum.value}`
            : `¥ ${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 32,
          });
        },
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
    legend: {
      position: "top", // Set the legend position to the top
    },
    color: ["#fa39d0", "#9a47ed", "#dddae0"],
  };
  return (
    <>
      <div className="card pie_chart_card">
        <div className="headings">
          <div>
            <h2>Coustomers</h2>
            <p>Coustomers that buy products</p>
          </div>
        </div>
        <div className="chart_style">
          <Pie {...config} />
        </div>
      </div>
    </>
  );
};

export default DashboardPiechart;
