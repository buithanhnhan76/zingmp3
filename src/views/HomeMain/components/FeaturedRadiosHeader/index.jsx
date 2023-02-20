// libs
import { useSelector } from "react-redux";
// child
import Button from "src/components/Button";
// style
import styles from "./FeaturedRadiosHeader.module.scss";

const FeaturedRadiosHeader = () => {
  const { title, buttonLabel } = useSelector(
    (state) => state.locale.translate.featuredRadios
  );
  return (
    <div className={styles["featured-radio-header"]}>
      <h3 className={styles["featured-radio-title"]}>{title}</h3>
      <Button buttonLabel={buttonLabel} border="none" color="secondary" arrow />
    </div>
  );
};

export default FeaturedRadiosHeader;
