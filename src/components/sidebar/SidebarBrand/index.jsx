import styles from "./SidebarBrand.module.scss";
import ZingLogo from "../../../../public/photos/zing-logo.svg";

const SideBarBrand = () => (
  <div className={styles["sidebar-brand-container"]}>
    <img
      alt="side bar brand logo"
      className={styles["sidebar-brand-logo"]}
      src={ZingLogo.src}
    />
  </div>
);

export default SideBarBrand;
