// childrens
import SidebarBannerItems from "./mains/SidebarBannerItems";
import SidebarBrand from "./mains/SidebarBrand";
import SidebarButton from "./mains/SidebarButton";
import SidebarItems from "./mains/SidebarItems";
// Sidebar style
import styles from "./Sidebar.module.scss";

const Sidebar = ({ translate }) => (
  <div className={styles["sidebar-container"]}>
    <SidebarBrand />
    <SidebarItems translate={translate} />
    <SidebarBannerItems translate={translate} />
    <SidebarButton translate={translate} />
  </div>
);

export default Sidebar;
