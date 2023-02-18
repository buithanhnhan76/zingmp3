// libs
import { Carousel } from "antd";
import { useRef, useMemo } from "react";
// mock
import { listRadios } from "src/mocks/OutstandingRadio";
// hook
import useWindowDimensions from "src/hooks/useWindowDimensions";
// component
import LeftButton from "../LeftButton";
import RightButton from "../RightButton";
import RadioItem from "../RadioItem";
// styles
import styles from "./OutStandingRadioCarousel.module.scss";

const OutStandingRadioCarousel = () => {
  const carousel = useRef();
  const windowDimensions = useWindowDimensions();

  const calculateSlide = () => {
    if (windowDimensions) {
      if (windowDimensions.width > 1400) return 7;
       if (windowDimensions.width >= 768) return 5;
      if (windowDimensions.width >= 375) return 2;
      return 1;
    }
  };
  const numberOfslidesToShow = useMemo(
    () => calculateSlide(),
    [windowDimensions]
  );
  return (
    <div className={styles["carousel-container"]}>
      <Carousel dots={false} slidesToShow={numberOfslidesToShow} ref={carousel}>
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
