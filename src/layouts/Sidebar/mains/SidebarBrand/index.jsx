// libs
import Image from "next/image";
import Link from "next/link";
// photo
import zingLogo from "public/icons/zing-logo.svg";
// style
import styles from "./SidebarBrand.module.scss";

const SideBarBrand = () => (
  <div className={styles["sidebar-brand-container"]} data-cy="sidebar-brand">
    <Link href="/">
      <Image
        alt="side bar brand logo"
        width={120}
        height={40}
        src={zingLogo.src}
      />
    </Link>
  </div>
);

export default SideBarBrand;
