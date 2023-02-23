// children
import FeaturedRadioHeader from "../../components/FeaturedRadioHeader";
import FeaturedRadioCarousel from "../../components/FeaturedRadioCarousel";
// style
import styles from "./FeaturedRadio.module.scss";

const FeaturedRadio = () => (
  <section className={styles["featured-radio-container"]}>
    <FeaturedRadioHeader />
    <FeaturedRadioCarousel />
  </section>
);

export default FeaturedRadio;
