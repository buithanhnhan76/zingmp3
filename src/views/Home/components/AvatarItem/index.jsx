import Image from "next/image";
// style
import styles from "./AvatarItem.module.scss";
// test
import userPhoto from "public/photos/user.jpg";

const AvatarItem = () => (
  <div className={styles["avatar-item-container"]}>
   <Image src={userPhoto.src} layout="fill" />
  </div>
);

export default AvatarItem;
