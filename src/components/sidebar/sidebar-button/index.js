import { PlusOutlined } from '@ant-design/icons';
import styles from './sidebar-button.module.scss';

const SideBarButton = () => (
  <div className={styles['sidebar-button-container']}>
    <div className={styles["sidebar-button-content"]}>
      <PlusOutlined /> Tạo playlist mới
    </div>
  </div>
);

export default SideBarButton;
