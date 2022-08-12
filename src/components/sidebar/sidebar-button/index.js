import { PlusOutlined } from '@ant-design/icons';
import styles from './sidebar-button.module.scss';

const SideBarButton = ({ trans }) => (
  <div className={styles['sidebar-button-container']}>
    <div className={styles['sidebar-button-content']}>
      <PlusOutlined className={styles['sidebar-button-icon']} />
      {trans.sidebar.button.label}
    </div>
  </div>
);

export default SideBarButton;
