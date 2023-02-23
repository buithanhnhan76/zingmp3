// libs
import { Carousel } from "antd";
import { useRef } from "react";
// mock
import { listFeaturedRadios } from "src/mocks/FeaturedRadio";
// hook
import { useSlidesNumber } from "src/hooks/useSlidesNumber";
// children
import RadioItem from "../RadioItem";
import LeftButton from "../LeftButton";
import RightButton from "../RightButton";
// styles
import styles from "./FeaturedRadioCarousel.module.scss";

const FeaturedRadiosCarousel = () => {
  const carousel = useRef();
  const numberOfSlidesToShow = useSlidesNumber(7, 5, 3, 1);
  return (
    <div className={styles["carousel-container"]}>
      <Carousel
        dots={false}
        slidesToShow={numberOfSlidesToShow}
        ref={carousel}
        autoplay
      >
        {listFeaturedRadios.map((item) => (
          <RadioItem key={item.id} item={item} />
        ))}
      </Carousel>
      <LeftButton carousel={carousel} />
      <RightButton carousel={carousel} />
    </div>
  );
};

export default FeaturedRadiosCarousel;
