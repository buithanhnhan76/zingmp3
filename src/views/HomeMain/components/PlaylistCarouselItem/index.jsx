// libs
import React from "react";
import Image from "next/image";
// styles
import styles from "./PlaylistCarouselItem.module.scss";

const PlaylistCarouselItem = ({ item, order }) => (
  <div className={styles["playlist-carousel-item-container"]} order={order}>
    <div className={styles["playlist-carousel-item-photo-container"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <div>
      <h3 className={styles["playlist-carousel-item-title"]}>{item.title}</h3>
    </div>
    <div className={styles["playlist-carousel-item-desc"]}>{item.desc}</div>
  </div>
);

export default React.memo(PlaylistCarouselItem);
