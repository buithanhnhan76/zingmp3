// mocks
import { listWeekChartItems } from "src/mocks/WeekChart";
// child
import WeekChartItems from "../../components/WeekChartItems";
// style
import styles from "./WeekChart.module.scss";

const WeekChart = () => (
  <div className={styles["weekchart-container"]}>
    <WeekChartItems listItems={listWeekChartItems} />
  </div>
);

export default WeekChart;
