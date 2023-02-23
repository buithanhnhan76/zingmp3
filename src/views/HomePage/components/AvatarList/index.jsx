import AvatarItem from "../AvatarItem";
// style
import styles from "./AvatarList.module.scss";

const AvatarList = ({ items }) => (
  <div className={styles["avatar-list-container"]}>
    <div className={styles["avatar-list"]}>
      {items.slice(0, 5).map((item) => (
        <AvatarItem item={item} key={item.id} />
      ))}
    </div>
    <div className={styles["followers-number"]}>+ {items.length}</div>
  </div>
);

export default AvatarList;
