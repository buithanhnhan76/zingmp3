// style
import styles from "./VipBanner.module.scss";

const VipBanner = ({ item }) => (
  <div className={styles["vip-banner-container"]}>
    <h3>{item.title}</h3>
    <button type="button" className={styles["vip-banner-button"]}>
      {item.buttonLabel}
    </button>
  </div>
);

export default VipBanner;
