
import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";


ReactFC.fcRoot(FusionCharts, Chart);

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Start Per Language',
        decimals: 0 ,
        doughnutRadius : '45%',
        showPercentValue: 0,
        theme: 'candy',
      },
      // Chart Data
      data ,
    },
  };
  return <ReactFC {...chartConfigs} />;
};



export default ChartComponent;
