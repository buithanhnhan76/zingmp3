// libs
import Image from "next/image";
// photos
import userPhoto from "public/photos/user.jpg";
// style
import styles from "./AvatarItem.module.scss";


const AvatarItem = () => (
  <div className={styles["avatar-item-container"]}>
    <Image src={userPhoto.src} layout="fill" />
  </div>
);

export default AvatarItem;
