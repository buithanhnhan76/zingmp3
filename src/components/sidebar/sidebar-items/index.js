import SideBarItem from './sidebar-item/index';
import styles from './sidebar-items.module.scss';

const SideBarItems = ({ trans }) => (
  <div className={styles['side-bar-items-container']}>
    {trans.sidebar.items.map((item) => (
      <SideBarItem key={item.title} item={item} />
    ))}
  </div>
);

export default SideBarItems;
