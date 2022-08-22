import styles from "./EventItemFooter.module.scss";

const EventItemFooter = () => (
  <div className={styles["event-item-footer"]}>
    <div className={styles["event-item-footer-title"]}>Lượt quan tâm</div>
    <div>
      <button className={styles["event-item-footer-button"]}>Quan tâm</button>
    </div>
  </div>
);

export default EventItemFooter;
