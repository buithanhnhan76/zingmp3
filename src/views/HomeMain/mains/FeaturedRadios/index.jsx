// children
import FeaturedRadiosHeader from "../../components/FeaturedRadiosHeader";
import FeaturedRadiosCarousel from "../../components/FeaturedRadiosCarousel";
// style
import styles from "./FeaturedRadios.module.scss";

const FeaturedRadios = () => (
  <div className={styles["featured-radios-container"]}>
    <FeaturedRadiosHeader />
    <FeaturedRadiosCarousel />
  </div>
);

export default FeaturedRadios;
