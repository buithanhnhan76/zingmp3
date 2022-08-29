// libs
import { useSelector } from "react-redux";
// components
import SidebarBannerItem from "../../components/SidebarBannerItem";
// style
import styles from "./SidebarBannerItems.module.scss";

const SidebarBannerItems = () => {
  // redux
  const { bannerItems } = useSelector(
    (state) => state.locale.translate.sidebar
  );

  return (
    <div className={styles["sidebar-banner-items-container"]}>
      {bannerItems.map((item) => (
        <SidebarBannerItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default SidebarBannerItems;
