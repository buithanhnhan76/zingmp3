// style
import styles from "./CarouselLeftButton.module.scss";

const CarouselLeftButton = ({carousel}) => (
  <button
    className={styles["carousel-left-button"]}
    onClick={() => carousel.current.prev()}
  />
);

export default CarouselLeftButton;
