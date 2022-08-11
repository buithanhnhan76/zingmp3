import { PlayCircleOutlined } from '@ant-design/icons';
import styles from './sidebar-item.module.scss';

const SideBarItem = ({ item }) =>
  item.title !== '' ? (
    <div className={styles['sidebar-item-container']}>
      <div className={styles['sidebar-item-content']}>
        <PlayCircleOutlined className={styles['sidebar-item-icon']} />{' '}
        {item.title}
      </div>
    </div>
  ) : (
    <div className={styles['sidebar-line-container']}>
      <hr />
    </div>
  );

export default SideBarItem;
