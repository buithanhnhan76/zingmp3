// libs
import { Carousel } from "antd";
import { useRef} from "react";
// hooks
import { useSlidesNumber } from "src/hooks/useSlidesNumber";
// mock
import { listMediaCarousel } from "src/mocks/MediaCarousel";
// children
import MediaCarouselItem from "../../components/MediaCarouselItem";
import LeftButton from "../../components/LeftButton";
import RighButton from "../../components/RightButton";
// styles
import styles from "./MediaCarousel.module.scss";

const MediaCarousel = () => {
  const carousel = useRef();
  const numberOfSlidesToShow = useSlidesNumber(3, 2, 2, 1);
  return (
    <section className={styles["carousel-container"]}>
      <LeftButton carousel={carousel} />
      <Carousel
        autoplay
        dots={false}
        slidesToShow={numberOfSlidesToShow}
        ref={carousel}
      >
        {listMediaCarousel.map((item) => (
          <MediaCarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
      <RighButton carousel={carousel} />
    </section>
  );
};

export default MediaCarousel;
