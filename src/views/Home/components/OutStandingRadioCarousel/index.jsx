// libs
import { Carousel } from "antd";
import { useRef } from "react";
// mock
import { listRadios } from "src/mocks/OutstandingRadio";
// component
import LeftButton from "../LeftButton";
import RightButton from "../RightButton";
import RadioItem from "../RadioItem";
// styles
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
      <LeftButton carousel={carousel} />
      <RightButton carousel={carousel} />
    </div>
  );
};

export default OutStandingRadioCarousel;
