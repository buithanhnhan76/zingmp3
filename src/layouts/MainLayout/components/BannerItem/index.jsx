// constant
import constant from "src/constant";
// style
import styles from "./BannerItem.module.scss";

const BannerItem = ({ item }) => {
  const bannerContainerClassName =
    item.type === constant.VIPBANNER ? "vip-banner-container" : "login-banner-container";
  const bannerButtonClassName =
    item.type === constant.VIPBANNER
      ? "vip-banner-button"
      : "login-banner-button";
  return (
    <div className={styles[bannerContainerClassName]}>
      <div className={styles["banner-title"]}>{item.title}</div>
      <button type="button" className={styles[bannerButtonClassName]}>
        {item.buttonLabel}
      </button>
    </div>
  );
};
export default BannerItem;
