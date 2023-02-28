// libs
import classNames from "classnames";
// child
import Avatar from "../Avatar";
// styles
import styles from "./AvatarList.module.scss";

const AvatarList = ({ items, listType = "half", numberAvatarRender = "5" }) => (
  <div className={styles["avatar-list"]}>
    <div
      className={classNames(styles["avatar-list__photo"], {
        [[styles["avatar-list__half"]]]: listType === "half",
      })}
    >
      {items.slice(0, parseInt(numberAvatarRender)).map((item) => (
        <Avatar item={item} key={item.id} />
      ))}
    </div>
    <div className={styles["avatar-list__length"]}>+ {items.length}</div>
  </div>
);

export default AvatarList;
