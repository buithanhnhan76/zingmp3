import AvatarItem from "../AvatarItem";
// style
import styles from "./AvatarList.module.scss";

const AvatarList = ({ listAvatar }) => (
  <div className={styles["avatar-list-container"]}>
    <div className={styles["avatar-list"]}>
      {listAvatar.slice(0, 5).map((item) => (
        <AvatarItem item={item} key={item.id} />
      ))}
    </div>
    <div className={styles["avatar-list-count"]}>+ {listAvatar.length - 5}</div>
  </div>
);

export default AvatarList;
