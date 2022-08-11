import SideBarBannerItems from "./sidebar-banner-items";
import SideBarBrand from "./sidebar-brand";
import SideBarButton from "./sidebar-button";
import SideBarItems from "./sidebar-items";
import styles from "./sidebar.module.scss";

const SideBar = (props) => (
  <div className={styles["sidebar-container"]}>
    <SideBarBrand />
    <SideBarItems trans={props.trans} />
    <SideBarBannerItems trans={props.trans} />
    <SideBarButton />
  </div>
);

export default SideBar;
