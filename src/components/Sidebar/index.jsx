import SideBarBannerItems from './SidebarBannerItems';
import SideBarBrand from './SidebarBrand';
import SideBarButton from './SidebarButton';
import SideBarItems from './SidebarItems';
import styles from './Sidebar.module.scss';

const Sidebar = ({ trans }) => (
  <div className={styles['sidebar-container']}>
    <SideBarBrand />
    <SideBarItems trans={trans} />
    <SideBarBannerItems trans={trans} />
    <SideBarButton trans={trans} />
  </div>
);

export default Sidebar;
