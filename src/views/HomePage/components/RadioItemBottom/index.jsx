// styles
import styles from "./RadioItemBottom.module.scss";

const RadioItemBottom = ({ item }) => (
  <div className={styles["radio-item-bottom"]}>
    <h4>{item.name}</h4>
    <div className={styles["text-secondary"]}>{item.listener}</div>
  </div>
);

export default RadioItemBottom;
