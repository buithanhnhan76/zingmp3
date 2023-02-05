/* eslint-disable @next/next/no-html-link-for-pages */
// libs
import Image from "next/image";
import Link from "next/link";
// photo
import zingLogo from "public/icons/zing-logo.svg";
// style
import styles from "./Brand.module.scss";

const Brand = () => (
  <div className={styles["brand-container"]} data-cy="sidebar-brand">
    <Link href="/">
      <a href="/#">
        <Image
          alt="side bar brand logo"
          width={120}
          height={40}
          src={zingLogo.src}
        />
      </a>
    </Link>
  </div>
);

export default Brand;