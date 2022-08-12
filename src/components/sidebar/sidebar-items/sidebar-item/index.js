import { PlayCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './sidebar-item.module.scss';
import LiveTag from '../../../../../public/icon/live-tag.svg';

const SideBarItem = ({ item, selectedSideBarItem, setSelectedSideBarItem }) => {
  const handleClickSideBarItem = (title) => {
    setSelectedSideBarItem(title);
  };

  const calcActiveClassNameOfSideBarItem = (title) =>
    title === selectedSideBarItem ? 'sidebar-item-active' : '';

  return item.title !== '' ? (
    <Link href="#">
      <div
        className={`${styles['sidebar-item-container']} ${
          styles[calcActiveClassNameOfSideBarItem(item.title)]
        }`}
        onClick={() => handleClickSideBarItem(item.title)}
      >
        <div className={styles['sidebar-item-content']}>
          <PlayCircleOutlined className={styles['sidebar-item-right-margin']} />{' '}
          {item.title}
          {item.title === 'Radio' && (
            <img
              src={LiveTag.src}
              alt="live tag"
              className={styles['sidebar-item-left-margin']}
            />
          )}
        </div>
      </div>
    </Link>
  ) : (
    <div className={styles['sidebar-line-container']}>
      <hr />
    </div>
  );
};

export default SideBarItem;
