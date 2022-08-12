import SideBarBannerItems from './sidebar-banner-items';
import SideBarBrand from './sidebar-brand';
import SideBarButton from './sidebar-button';
import SideBarItems from './sidebar-items';
import styles from './sidebar.module.scss';

const SideBar = ({ trans }) => (
  <div className={styles['sidebar-container']}>
    <SideBarBrand />
    <SideBarItems trans={trans} />
    <SideBarBannerItems trans={trans} />
    <SideBarButton trans={trans} />
  </div>
);

export default SideBar;
