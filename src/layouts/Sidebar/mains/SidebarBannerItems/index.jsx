// f2 component
import SideBarBannerItem from '../../components/SidebarBannerItem';
// style
import styles from './SidebarBannerItems.module.scss';

const SideBarBannerItems = ({ trans }) => (
  <div className={styles['sidebar-banner-items-container']}>
    {trans.sidebar['banner-items'].map((item) => (
      <SideBarBannerItem key={item.title} item={item} />
    ))}
  </div>
);

export default SideBarBannerItems;
