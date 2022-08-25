// libs
import { Carousel } from "antd";
import { useRef } from "react";
// child
import Button from "src/components/Button";
import CarouselLeftButton from "../../components/CarouselLeftButton";
import CarouselRightButton from "../../components/CarouselRightButton";
// styles
import styles from "./OutStandingRadio.module.scss";

const OutStandingRadio = () => {
  const carousel = useRef();
  return (
    <div>
      <div className={styles["out-standing-radio-header"]}>
        <h3 className={styles["out-standing-radio-title"]}>Radio Nổi bật</h3>
        <Button buttonLabel="Tất cả" border="none" color="secondary" arrow />
      </div>
      <div className={styles["carousel-container"]}>
        <Carousel dots={false} slidesToShow={7} ref={carousel}>
          {/* {listMediaCarousel.map((item) => (
          <div key={item.id} className={classNames(styles["carousel-item"])}>
            <Image
              src={item.src}
              layout="fill"
              objectFit="contain"
              className={styles["carousel-image"]}
            />
          </div>
        ))} */}
        </Carousel>
        <CarouselLeftButton carousel={carousel} />
        <CarouselRightButton carousel={carousel} />
      </div>
    </div>
  );
};

export default OutStandingRadio;
