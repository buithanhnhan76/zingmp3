// libs
import React from "react";
import { Line } from "@ant-design/plots";
// mock
import { lineChartData } from "src/mocks/TopSongItems";

const config = {
  data: lineChartData,
  xField: "time",
  yField: "value",
  seriesField: "category",
};

const LineChart = () => <Line {...config} />;

export default LineChart;
