// style
import styles from "./SidebarBrand.module.scss";
// next image
import Image from "next/image";
// photo
import zingLogo from "public/icons/zing-logo.svg";

const SideBarBrand = () => (
  <div className={styles["sidebar-brand-container"]}>
    <Image
      alt="side bar brand logo"
      width={120}
      height={40}
      src={zingLogo.src}
    />
  </div>
);

export default SideBarBrand;
