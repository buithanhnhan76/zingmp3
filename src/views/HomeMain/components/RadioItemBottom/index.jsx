// styles
import styles from "./RadioItemBottom.module.scss";

const RadioItemBottom = ({ item }) => (
  <div className={styles["radio-item-bottom"]}>
    <h3 className={styles["radio-item-host-photo"]}>{item.name}</h3>
    <div className={styles["text-secondary"]}>{item.listener}</div>
  </div>
);

export default RadioItemBottom;
