// libs
import Image from "next/legacy/image";
import classNames from "classnames";
// styles
import styles from "./MediaCarouselItem.module.scss";

const MediaCarouselItem = ({ item }) => {
  return (
    <div className={classNames(styles["carousel-item"])}>
      <Image
        src={item.src}
        priority={item.priority}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default MediaCarouselItem;
