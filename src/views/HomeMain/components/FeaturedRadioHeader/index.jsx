// libs
import { useSelector } from "react-redux";
// child
import Button from "src/components/Button";
// style
import styles from "./FeaturedRadioHeader.module.scss";

const FeaturedRadioHeader = () => {
  const featuredRadio = useSelector(
    (state) => state.locale.translate.featuredRadio
  );
  return (
    <div className={styles["featured-radio-header"]}>
      <h3 className={styles["featured-radio-title"]}>{featuredRadio.title}</h3>
      <Button
        buttonLabel={featuredRadio.buttonLabel}
        border="none"
        color="secondary"
        arrow
      />
    </div>
  );
};

export default FeaturedRadioHeader;
