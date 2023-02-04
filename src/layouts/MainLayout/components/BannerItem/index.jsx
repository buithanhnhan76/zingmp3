// constant
import constant from "src/constant";
// style
import styles from "./BannerItem.module.scss";

const BannerItem = ({ item }) => {
  let bannerContainerClassName =
    item.type === constant.VIPBANNER ? "vip-banner-container" : "login-banner-container";
  let bannerButtonClassName =
    item.type === constant.VIPBANNER
      ? "vip-banner-button"
      : "login-banner-button";
  return (
    <div className={styles[bannerContainerClassName]}>
      <h3>{item.title}</h3>
      <button type="button" className={styles[bannerButtonClassName]}>
        {item.buttonLabel}
      </button>
    </div>
  )
};
export default BannerItem;
