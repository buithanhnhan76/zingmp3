/* eslint-disable @next/next/no-html-link-for-pages */
// libs
import Image from "next/legacy/image";
import Link from "next/link";
// photo
import zingLogo from "public/icons/zing-logo.svg";
import zingShortLogo from "public/icons/zingmp3-short-logo.svg";
// style
import styles from "./Brand.module.scss";

const Brand = () => (
  <div className={styles["brand-container"]} data-cy="sidebar-brand">
    <Link href="/">
      <div className={styles["zing-long-logo"]}>
        <Image
          alt="side bar brand logo"
          width={120}
          height={40}
          src={zingLogo.src}
        />
      </div>
      <div className={styles["zing-short-logo"]}>
        <Image
          alt="side bar brand logo"
          width={50}
          height={50}
          src={zingShortLogo.src}
        />
      </div>
    </Link>
  </div>
);

export default Brand;
