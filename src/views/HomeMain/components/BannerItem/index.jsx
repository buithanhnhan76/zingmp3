// libs
import Image from "next/image";
// style
import styles from "./BannerItem.module.scss";

const BannerItem = ({ src, order }) => (
  <div className={styles["banner-item-photo-container"]} order={order}>
    <Image src={src} layout="fill" objectFit="cover" />
  </div>
);

export default BannerItem;
