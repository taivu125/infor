
import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Chart);


const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Most Forker',
        yAxisName: "Forks",
        xAxisName: "Stars",
        yAxisNameFontSize: "16px",
        xAxisNameFontSize: "16px",
        
      },
      // Chart Data
      data ,
    },
  };
  return <ReactFC {...chartConfigs} />;
};



export default ChartComponent;
