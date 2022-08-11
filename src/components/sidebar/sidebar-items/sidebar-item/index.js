import { PlayCircleOutlined } from '@ant-design/icons';
import styles from './sidebar-item.module.scss';

const SideBarItem = (props) =>
  props.item.title !== '' ? (
    <div className={styles['sidebar-item-container']}>
      <div className={styles['sidebar-item-content']}>
        <PlayCircleOutlined /> {props.item.title}
      </div>
    </div>
  ) : (
    <div className={styles["sidebar-line-container"]}>
      <hr />
    </div>
  );

export default SideBarItem;
