// childrens
import SidebarBannerItems from "./mains/SidebarBannerItems";
import SidebarBrand from "./mains/SidebarBrand";
import SidebarButton from "./mains/SidebarButton";
import SidebarItems from "./mains/SidebarItems";
// redux
import { useSelector } from "react-redux";
// Sidebar style
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const {translate} = useSelector((state) => state.locale);

  return (
    <div className={styles["sidebar-container"]}>
      <SidebarBrand />
      <SidebarItems translate={translate}/>
      <SidebarBannerItems translate={translate} />
      <SidebarButton translate={translate} />
    </div>
  );
};

export default Sidebar;
