// children
import FeaturedRadiosHeader from "../../components/FeaturedRadiosHeader";
import OutStandingRadioCarousel from "../../components/OutStandingRadioCarousel";
// style
import styles from "./FeaturedRadios.module.scss";

const FeaturedRadios = () => (
  <div className={styles["featured-radios-container"]}>
    <FeaturedRadiosHeader />
    <OutStandingRadioCarousel />
  </div>
);

export default FeaturedRadios;
