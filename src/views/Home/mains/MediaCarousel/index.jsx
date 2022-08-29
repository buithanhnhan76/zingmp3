// libs
import Image from "next/image";
import { Carousel } from "antd";
import { useRef } from "react";
import classNames from "classnames";
// mock
import { listMediaCarousel } from "src/mocks/MediaCarousel";
// child
import CarouselLeftButton from "../../components/CarouselLeftButton";
import CarouselRightButton from "../../components/CarouselRightButton";
// style
import styles from "./MediaCarousel.module.scss";

const MediaCarousel = () => {
  const carousel = useRef();

  return (
    <div className={styles["carousel-container"]}>
      <Carousel autoplay dots={false} slidesToShow={3} ref={carousel}>
        {listMediaCarousel.map((item) => (
          <div key={item.id} className={classNames(styles["carousel-item"])}>
            <Image
              src={item.src}
              layout="fill"
              objectFit="contain"
              className={styles["carousel-image"]}
            />
          </div>
        ))}
      </Carousel>
      <CarouselLeftButton carousel={carousel} />
      <CarouselRightButton carousel={carousel} />
    </div>
  );
};

export default MediaCarousel;
