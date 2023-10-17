import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import "./DashboardBarchart.scss";

const DashboardBarchart = () => {
  const data = [
    { type: "Jan", value: 17 },
    { type: "Feb", value: 12 },
    { type: "Mar", value: 22 },
    { type: "Apr", value: 16 },
    { type: "May", value: 14 },
    { type: "Jun", value: 7 },
    { type: "Jul", value: 23 },
    { type: "Aug", value: 25 },
    { type: "Sep", value: 24 },
    { type: "Oct", value: 19 },
    { type: "Nov", value: 18 },
    { type: "Dec", value: 19 },
  ];
  const paletteSemanticRed = "#0060fa";
  const brandColor = "#cccccc";
  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      if (type === "Aug") {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <>
      <div className="bar_chart_card card">
        <div className="headings">
          <div>
            <h3>Overview</h3>
            <p>Monthly Earning</p>
          </div>

          <select className="dropdown">
            <option>Quarterly</option>
            <option>Half-Early </option>
            <option>Final</option>
          </select>
        </div>
        <div className="chart_style">
          <Column {...config} />
        </div>
      </div>
    </>
  );
};

export default DashboardBarchart;
