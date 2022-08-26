// libs
import { Carousel } from "antd";
import { useRef } from "react";
// child
import CarouselLeftButton from "../../components/CarouselLeftButton";
import CarouselRightButton from "../../components/CarouselRightButton";
import RadioItem from "../../components/RadioItem";
// mock
import { listRadios } from "src/mocks/OutstandingRadio";
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
