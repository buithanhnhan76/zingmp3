import Image from 'next/image'
import styles from './sidebar-brand.module.scss';

const SideBarBrand = () => (
    <div className={styles["sidebar-brand-container"]}>
      <img
        className={styles["sidebar-brand-logo"]}
        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
      />
    </div>
  );

export default SideBarBrand;
