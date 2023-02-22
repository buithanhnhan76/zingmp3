// children
import TopSongItems from "../../components/TopSongItems";
import LineChart from "../../components/LineChart";
// styles
import styles from "./Chart.module.scss";

const Chart = () => (
  <section className={styles["chart"]}>
    <h3 className={styles["chart-title"]}>#zingchart</h3>
    <div className={styles["chart-ranking"]}>
      <TopSongItems />
      <LineChart />
    </div>
  </section>
);
export default Chart;
