// import childrens
import SideBarBannerItems from "./mains/SidebarBannerItems";
import SideBarBrand from "./mains/SidebarBrand";
import SideBarButton from "./mains/SidebarButton";
import SideBarItems from "./mains/SidebarItems";
// Sidebar style
import styles from "./Sidebar.module.scss";

const Sidebar = ({ trans }) => (
  <div className={styles["sidebar-container"]}>
    <SideBarBrand />
    <SideBarItems trans={trans} />
    <SideBarBannerItems trans={trans} />
    <SideBarButton trans={trans} />
  </div>
);

export default Sidebar;
