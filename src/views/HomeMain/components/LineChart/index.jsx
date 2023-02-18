// libs
import React from "react";
import dynamic from "next/dynamic";
const Line = dynamic(
  () => import("@ant-design/plots").then(({ Line }) => Line),
  {
    ssr: false,
  }
);
// mock
import { lineChartData } from "src/mocks/TopSongItems";
// styles
import styles from "./LineChart.module.scss";

const config = {
  data: lineChartData,
  xField: "time",
  yField: "value",
  seriesField: "category",
  responsive: true,
};

const LineChart = () => (
  <div className={styles["linechart-container"]}>
    <Line {...config} />
  </div>
);

export default LineChart;
