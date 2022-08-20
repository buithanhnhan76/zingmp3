import styles from "./UserButton.module.scss";
// next image
import Image from "next/image";

const UserButton = ({src}) => (
  <div className={styles["user-button-container"]}>
    <Image
      className={styles["user-button-photo"]}
      width={40}
      height={40}
      src={src}
    />
  </div>
);

export default UserButton;
