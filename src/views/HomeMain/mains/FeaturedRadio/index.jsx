// children
import FeaturedRadioHeader from "../../components/FeaturedRadioHeader";
import FeaturedRadioCarousel from "../../components/FeaturedRadioCarousel";
// style
import styles from "./FeaturedRadio.module.scss";

const FeaturedRadio = () => (
  <div className={styles["featured-radio-container"]}>
    <FeaturedRadioHeader />
    <FeaturedRadioCarousel />
  </div>
);

export default FeaturedRadio;
