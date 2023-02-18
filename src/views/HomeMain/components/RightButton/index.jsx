// style
import styles from "./RightButton.module.scss";

const RightButton = ({ carousel }) => (
  <button
    className={styles["right-button"]}
    onClick={() => carousel.current.next()}
    data-cy="carousel-right-button"
    type="button"
    aria-label="carousel right button"
  />
);

export default RightButton;
