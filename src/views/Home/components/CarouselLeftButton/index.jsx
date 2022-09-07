// style
import styles from "./CarouselLeftButton.module.scss";

const CarouselLeftButton = ({ carousel }) => (
  <button
    className={styles["carousel-left-button"]}
    onClick={() => carousel.current.prev()}
    data-cy="carousel-left-button"
  />
);

export default CarouselLeftButton;
