// style
import styles from "./CarouselRightButton.module.scss";

const CarouselRightButton = ({ carousel }) => (
  <button
    className={styles["carousel-right-button"]}
    onClick={() => carousel.current.next()}
  />
);

export default CarouselRightButton;
