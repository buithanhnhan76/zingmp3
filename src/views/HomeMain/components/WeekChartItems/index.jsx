// child
import WeekChartItem from "../WeekChartItem";
// style
import styles from "./WeekChartItems.module.scss";

const WeekChartItems = ({ listItems }) => (
  <div className={styles["week-chart-items-container"]}>
    {listItems.map((item, index) => (
      <WeekChartItem key={item.id} src={item.src} order={index} />
    ))}
  </div>
);

export default WeekChartItems;
