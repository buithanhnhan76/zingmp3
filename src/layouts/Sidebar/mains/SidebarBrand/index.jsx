// style
import styles from "./SidebarBrand.module.scss";
// next image
import Image from "next/image";

const SideBarBrand = () => (
  <div className={styles["sidebar-brand-container"]}>
    <Image
      alt="side bar brand logo"
      width={120}
      height={40}
      src="/icons/zing-logo.svg"
    />
  </div>
);

export default SideBarBrand;
