// f2 component
import SidebarBannerItem from "../../components/SidebarBannerItem";
// style
import styles from "./SidebarBannerItems.module.scss";

const SideBarBannerItems = ({ trans }) => (
  <div className={styles["sidebar-banner-items-container"]}>
    {trans.sidebar["banner-items"].map((item) => (
      <SidebarBannerItem key={item.title} item={item} />
    ))}
  </div>
);

export default SideBarBannerItems;
