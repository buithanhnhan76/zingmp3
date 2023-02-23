// libs
import Image from "next/legacy/image";
import classNames from "classnames";
// photos
import userPhoto from "public/photos/user.jpg";
// styles
import styles from "./AvatarItem.module.scss";


const AvatarItem = () => (
  <div className={classNames(styles["avatar-item"])}>
    <Image src={userPhoto.src} layout="fill" objectFit="cover"/>
  </div>
);

export default AvatarItem;
