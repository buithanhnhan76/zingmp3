// libs
import Image from "next/image";
import { Carousel } from "antd";
import { useRef } from "react";
import classNames from "classnames";
// mock
import { listMediaCarousel } from "src/mocks/MediaCarousel";
// children
import LeftButton from "../../components/LeftButton";
import RighButton from "../../components/RightButton";
// style
import styles from "./MediaCarousel.module.scss";

const MediaCarousel = () => {
  const carousel = useRef();

  return (
    <div className={styles["carousel-container"]}>
      <LeftButton carousel={carousel} />
      <Carousel autoplay dots={true} slidesToShow={3} ref={carousel}>
        {listMediaCarousel.map((item) => (
          <div key={item.id} className={classNames(styles["carousel-item"])}>
            <Image
              src={item.src}
              layout="fill"
              objectFit="cover"
              className={styles["carousel-item-image"]}
              priority={item.id === 1}
            />
          </div>
        ))}
      </Carousel>

      <RighButton carousel={carousel} />
    </div>
  );
};

export default MediaCarousel;
