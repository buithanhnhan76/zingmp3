import AvatarList from "../AvatarList";
// style
import styles from "./EventItemFooter.module.scss";

const EventItemFooter = ({ item }) => (
  <div className={styles["event-item-footer"]}>
    <div className={styles["event-item-footer-title-container"]}>
      <h5 className={styles["event-item-footer-title"]}>{item.footerTitle}</h5>
      <AvatarList listAvatar={item.listInterested} />
    </div>
    <div>
      <button className={styles["event-item-footer-button"]} type="button">
        {item.buttonLabel}
      </button>
    </div>
  </div>
);

export default EventItemFooter;
