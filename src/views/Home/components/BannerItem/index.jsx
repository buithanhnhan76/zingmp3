// libs
import Image from "next/image";
// style
import styles from "./BannerItem.module.scss";

const BannerItem = ({ src }) => (
  <div className={styles["banner-item-photo-container"]}>
    <Image src={src} layout="fill" objectFit="cover" />
  </div>
);

export default BannerItem;
