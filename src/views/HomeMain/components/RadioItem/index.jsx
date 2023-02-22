// children
import RadioItemTop from "../RadioItemTop";
import RadioItemBottom from "../RadioItemBottom";
// styles
import styles from "./RadioItem.module.scss";

const RadioItem = ({ item }) => (
  <div class={styles["radio-item"]}>
    <RadioItemTop item={item} />
    <RadioItemBottom item={item} />
  </div>
);

export default RadioItem;
