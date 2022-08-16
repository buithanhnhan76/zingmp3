import styles from "./EventItem.module.scss";

const EventItem = ({ item }) => (
  <div className={styles["event-item-container"]}>
    {" "}
    <div className={styles["event-item-header"]}>
      <img src={item.imgSrc} className={styles["event-item-header-photo"]} />
      <div className={styles["event-item-header-content"]}>
        <span className={styles["event-item-header-content-category"]}>
          PHÁT HÀNH BÀI HÁT
        </span>
        <h3 className={styles["event-item-header-content-title"]}>Một Thời Nhanh Như Một Ngày - Doãn</h3>
        <span>19:00 Thứ Ba, 16 tháng 8</span>
      </div>
      
    </div>
    <div className={styles["event-item-footer"]}>
        <div>Lượt quan tâm</div>
        <div>
          <button className={styles["event-item-footer-button"]}>Quan tâm</button>
        </div>
      </div>
  </div>
);

export default EventItem;
