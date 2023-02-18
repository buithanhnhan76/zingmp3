// libs
import Image from "next/image";
import { Carousel} from "antd";
import { useRef, useMemo } from "react";
import classNames from "classnames";
// hooks
import useWindowDimensions from "src/hooks/useWindowDimensions";
// mock
import { listMediaCarousel } from "src/mocks/MediaCarousel";
// children
import LeftButton from "../../components/LeftButton";
import RighButton from "../../components/RightButton";
// style
import styles from "./MediaCarousel.module.scss";


const MediaCarousel = () => {
  const carousel = useRef();
  const windowDimensions = useWindowDimensions();

  const slideToShow = useMemo(() => {
    if (windowDimensions) {
      if (windowDimensions.width > 1028) return 3;
      if (windowDimensions.width > 425) return 2;
      return 1;
    }
    return 3;
  }, [windowDimensions]);
  return (
    <div className={styles["carousel-container"]}>
      <LeftButton carousel={carousel} />
      <Carousel autoplay dots={false} slidesToShow={slideToShow} ref={carousel}>
        {listMediaCarousel.map((item) => (
            <div key={item.id} className={classNames(styles["carousel-item"])}>
              <Image
                src={item.src}
                priority={item.priority}
                layout="fill"
                objectFit="cover"
              />
            </div>
        ))}
      </Carousel>
      <RighButton carousel={carousel} />
    </div>
  );
};

export default MediaCarousel;
