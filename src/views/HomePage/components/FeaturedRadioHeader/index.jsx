// libs
import { useSelector } from "react-redux";
// child
import SectionTitle from "src/components/SectionTitle";
import Button from "src/components/Button";
// styles
import styles from "./FeaturedRadioHeader.module.scss";

const FeaturedRadioHeader = () => {
  const { title, buttonLabel } = useSelector(
    (state) => state.locale.translate.featuredRadio
  );
  return (
    <div className={styles["featured-radio-header"]}>
      <SectionTitle>{title}</SectionTitle>
      <Button buttonLabel={buttonLabel} border="none" color="secondary" arrow />
    </div>
  );
};

export default FeaturedRadioHeader;
