// styles
import styles from "./LeftButton.module.scss";

const LeftButton = ({ carousel }) => (
  <button
    className={styles["left-button"]}
    onClick={() => carousel.current.prev()}
    data-cy="carousel-left-button"
    type="button"
    aria-label="left button"
  />
);

export default LeftButton;
