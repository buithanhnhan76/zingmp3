// mocks
import { listBannerItems } from "src/mocks/Banner";
// child
import BannerItems from "../../components/BannerItems";
// style
import styles from "./Banner.module.scss";

const Banner = () => (
  <div className={styles["banner-container"]}>
    <BannerItems listItems={listBannerItems} />
  </div>
);

export default Banner;
