// libs
import React from "react";
import { Line } from "@ant-design/plots";

const data = [
  {
    time: "18:00",
    value: 30,
    category: "Song 1",
  },
  {
    time: "18:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "18:00",
    value: 35,
    category: "Song 3",
  },
  {
    time: "19:00",
    value: 32,
    category: "Song 1",
  },
  {
    time: "19:00",
    value: 30,
    category: "Song 2",
  },
  {
    time: "19:00",
    value: 35,
    category: "Song 3",
  },
  {
    time: "20:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "20:00",
    value: 30,
    category: "Song 2",
  },
  {
    time: "20:00",
    value: 32,
    category: "Song 3",
  },
  {
    time: "21:00",
    value: 32,
    category: "Song 1",
  },
  {
    time: "21:00",
    value: 35,
    category: "Song 2",
  },
  {
    time: "21:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "22:00",
    value: 32,
    category: "Song 1",
  },
  {
    time: "22:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "22:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "23:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "23:00",
    value: 30,
    category: "Song 2",
  },
  {
    time: "23:00",
    value: 32,
    category: "Song 3",
  },
  {
    time: "00:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "00:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "00:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "01:00",
    value: 30,
    category: "Song 1",
  },
  {
    time: "01:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "01:00",
    value: 35,
    category: "Song 3",
  },
  {
    time: "02:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "02:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "02:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "03:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "03:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "03:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "04:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "04:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "04:00",
    value: 35,
    category: "Song 3",
  },
  {
    time: "05:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "05:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "05:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "06:00",
    value: 30,
    category: "Song 1",
  },
  {
    time: "06:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "06:00",
    value: 35,
    category: "Song 3",
  },
  {
    time: "07:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "07:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "07:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "08:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "08:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "08:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "09:00",
    value: 35,
    category: "Song 1",
  },
  {
    time: "09:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "10:00",
    value: 30,
    category: "Song 3",
  },
  {
    time: "10:00",
    value: 30,
    category: "Song 1",
  },
  {
    time: "10:00",
    value: 32,
    category: "Song 2",
  },
  {
    time: "10:00",
    value: 35,
    category: "Song 3",
  },
];

const config = {
  data,
  xField: "time",
  yField: "value",
  seriesField: "category",
};

const LineChart = () => <Line {...config} />;

export default LineChart;
