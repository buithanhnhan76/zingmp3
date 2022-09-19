// libs
import { Carousel } from "antd";
import { useRef } from "react";
// mock
import { listRadios } from "src/mocks/OutstandingRadio";
// component
import CarouselLeftButton from "../CarouselLeftButton";
import CarouselRightButton from "../CarouselRightButton";
import RadioItem from "../RadioItem";
// style
import styles from "./OutStandingRadioCarousel.module.scss";

const OutStandingRadioCarousel = () => {
  const carousel = useRef();
  return (
    <div className={styles["carousel-container"]}>
      <Carousel dots={false} slidesToShow={7} ref={carousel}>
        {listRadios.map((radio) => (
          <RadioItem key={radio.id} radio={radio} />
        ))}
      </Carousel>
      <CarouselLeftButton carousel={carousel} />
      <CarouselRightButton carousel={carousel} />
    </div>
  );
};

export default OutStandingRadioCarousel;
