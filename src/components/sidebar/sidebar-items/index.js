import SideBarItem from './sidebar-item/index';
import styles from './sidebar-items.module.scss';

const SideBarItems = (props) => (
    <div className={styles["side-bar-items-container"]}>
      {props.trans.sidebar.items.map((item) => (
        <SideBarItem item={item} />
      ))}
    </div>
  );

export default SideBarItems;
