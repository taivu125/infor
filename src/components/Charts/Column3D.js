
import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Самый Популярный',
        yAxisName: "Stars",
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
