import styles from './SidebarBannerItems.module.scss';
import SideBarBannerItem from './SidebarBannerItem';

const SideBarBannerItems = ({ trans }) => (
  <div className={styles['sidebar-banner-items-container']}>
    {trans.sidebar['banner-items'].map((item) => (
      <SideBarBannerItem key={item.title} item={item} />
    ))}
  </div>
);
export default SideBarBannerItems;
