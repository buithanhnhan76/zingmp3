// children
import TopSongItems from "../../components/TopSongItems";
import LineChart from "../../components/LineChart";
// style
import styles from "./Chart.module.scss";

const Chart = () => {
  return (
    <div className={styles["chart-container"]}>
      <h3 className={styles["chart-title"]}>#zingchart</h3>
      <div className={styles["chart-ranking"]}>
        <TopSongItems />
        <LineChart />
      </div>
    </div>
  );
};

export default Chart;
