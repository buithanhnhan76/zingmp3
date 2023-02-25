// styles
import styles from "./EventItemContent.module.scss";

const EventItemContent = ({item}) => (
  <div className={styles["event-item-content"]}>
    <span className={styles["event-item-category"]}>{item.category}</span>
    <h4 className={styles["event-item-title"]}>{item.title}</h4>
    <span className={styles["event-item-date"]}>{item.date}</span>
  </div>
);

export default EventItemContent;
