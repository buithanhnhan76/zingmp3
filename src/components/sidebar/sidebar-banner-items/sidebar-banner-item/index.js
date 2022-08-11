import styles from './sidebar-banner-item.module.scss';

const SideBarBannerItem = ({ item }) => (
  <div
    className={
      item.type !== 'vip-banner'
        ? styles['sidebar-banner-item-container']
        : styles['sidebar-vip-banner-item-container']
    }
  >
    <h3>{item.title}</h3>
    <button
      type="button"
      className={
        item.type !== 'vip-banner'
          ? styles['sidebar-banner-item-button']
          : styles['sidebar-vip-banner-item-button']
      }
    >
      {item.label}
    </button>
  </div>
);

export default SideBarBannerItem;
