// libs
import Image from "next/image";
import { Carousel, Space } from "antd";
import { useRef, useMemo } from "react";
import classNames from "classnames";
// mock
import { listMediaCarousel } from "src/mocks/MediaCarousel";
// children
import LeftButton from "../../components/LeftButton";
import RighButton from "../../components/RightButton";
// style
import styles from "./MediaCarousel.module.scss";
import useWindowDimensions from "src/hooks/useWindowDimensions";

const MediaCarousel = () => {
  const carousel = useRef();
  const windowDimensions = useWindowDimensions();

  const slideToShow = useMemo(() => {
    if (windowDimensions) {
      if (windowDimensions.width > 1028) return 3;
      if (windowDimensions.width > 425) return 2;
      return 1;
    }
  }, [windowDimensions]);
  return (
    <div className={styles["carousel-container"]}>
      <LeftButton carousel={carousel} />
      <Carousel autoplay dots={false} slidesToShow={slideToShow} ref={carousel}>
        {listMediaCarousel.map((item) => (
            <div key={item.id} className={classNames(styles["carousel-item"])}>
              <Image
                src={item.src}
                layout="fill"
                objectFit="cover"
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
