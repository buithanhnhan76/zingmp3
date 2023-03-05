// libs
import Image from "next/legacy/image";
import classNames from "classnames";
// styles
import styles from "./Avatar.module.scss";

const Avatar = ({ item, avatarSize = "small", avatarShape = "round" }) => (
  <div
    className={classNames(
      styles.avatar,
      {
        [[styles["avatar__small"]]]: avatarSize === "small",
      },
      {
        [[styles["avatar__rounded"]]]: avatarShape === "round",
      }
    )}
  >
    <Image src={item.src} layout="fill" objectFit="cover" />
  </div>
);

export default Avatar;
