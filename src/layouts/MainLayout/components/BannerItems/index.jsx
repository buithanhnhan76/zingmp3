// libs
import { useSelector } from "react-redux";
// components
import BannerItem from "../BannerItem";
// style
import styles from "./BannerItems.module.scss";

const BannerItems = () => {
  // redux
  const { bannerItems } = useSelector(
    (state) => state.locale.translate.sidebar
  );

  return (
    <div className={styles["banner-items-container"]}>
      {bannerItems.map((item) => (
        <BannerItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default BannerItems;
