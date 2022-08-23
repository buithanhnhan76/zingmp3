// image
import Image from "next/image";
// style
import styles from "./EventItemHeader.module.scss";

const EventItemHeader = ({ item }) => (
  <div className={styles["event-item-header"]}>
    <Image layout="fill" objectFit="cover" src={item.src} />
    <div className={styles["event-item-content"]}>
      <span className={styles["event-item-content-category"]}>
        {item.category}
      </span>
      <h3 className={styles["event-item-content-title"]}>
        {item.title}
      </h3>
      <span className={styles["event-item-content-date"]}>
        {item.date}
      </span>
    </div>
    <div className={styles["event-item-header-opacity"]} />
  </div>
);

export default EventItemHeader;
