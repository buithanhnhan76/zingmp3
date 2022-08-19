// children
import SidebarBannerItem from "../../components/SidebarBannerItem";
// style
import styles from "./SidebarBannerItems.module.scss";

const SidebarBannerItems = ({ translate }) => (
  <div className={styles["sidebar-banner-items-container"]}>
    {translate.sidebar["bannerItems"].map((item) => (
      <SidebarBannerItem key={item.title} item={item} />
    ))}
  </div>
);

export default SidebarBannerItems;
