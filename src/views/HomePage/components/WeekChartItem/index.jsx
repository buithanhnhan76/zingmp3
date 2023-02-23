// libs
import Image from "next/legacy/image";
// style
import styles from "./WeekChartItem.module.scss";

const WeekChartItem = ({ src, order }) => (
  <div className={styles["week-chart-item-photo-container"]} order={order}>
    <Image src={src} layout="fill" objectFit="cover" />
  </div>
);

export default WeekChartItem;
