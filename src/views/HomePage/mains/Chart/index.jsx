// children
import SectionTitle from "src/components/SectionTitle";
import TopSongItems from "../../components/TopSongItems";
import LineChart from "../../components/LineChart";
// styles
import styles from "./Chart.module.scss";

const Chart = () => (
  <section className={styles.chart}>
    <SectionTitle>#zingchart</SectionTitle>
    <div className={styles["chart-ranking"]}>
      <TopSongItems />
      <LineChart />
    </div>
  </section>
);
export default Chart;
