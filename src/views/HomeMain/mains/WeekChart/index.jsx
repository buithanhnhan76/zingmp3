// mock
import { listWeekChartItems } from "src/mocks/WeekChart";
// child
import WeekChartItems from "../../components/WeekChartItems";
// styles
import styles from "./WeekChart.module.scss";

const WeekChart = () => (
  <section className={styles["weekchart-container"]}>
    <WeekChartItems listItems={listWeekChartItems} />
  </section>
);

export default WeekChart;
