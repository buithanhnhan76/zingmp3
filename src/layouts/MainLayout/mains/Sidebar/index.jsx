// children
import SidebarBannerItems from "./mains/SidebarBannerItems";
import SidebarBrand from "./mains/SidebarBrand";
import SidebarButton from "./mains/SidebarButton";
import SidebarItems from "./mains/SidebarItems";
// styleS
import styles from "./Sidebar.module.scss";

const Sidebar = () => (
  <div className={styles["sidebar-container"]}>
    <SidebarBrand />
    <SidebarItems />
    <SidebarBannerItems />
    <SidebarButton />
  </div>
);

export default Sidebar;
