// libs
import React from "react";
import dynamic from "next/dynamic";
// mock
import { chartData } from "src/mocks/TopSongItems";
// styles
import styles from "./LineChart.module.scss";

const LineChartComponent = dynamic(
  () => import("@ant-design/plots").then(({ Line }) => Line),
  {
    ssr: false,
  }
);

const config = {
  data: chartData,
  xField: "time",
  yField: "value",
  seriesField: "category",
  responsive: true,
};

const LineChart = () => (
  <div className={styles["linechart"]}>
    <LineChartComponent {...config} />
  </div>
);

export default LineChart;
