import { useState } from 'react';
import SideBarItem from './sidebar-item/index';
import styles from './sidebar-items.module.scss';

const SideBarItems = ({ trans }) => {
  const [selectedSideBarItem, setSelectedSideBarItem] = useState('');
  return (
    <div className={styles['side-bar-items-container']}>
      {trans.sidebar.items.map((item) => (
        <SideBarItem
          key={item.title}
          item={item}
          selectedSideBarItem={selectedSideBarItem}
          setSelectedSideBarItem={setSelectedSideBarItem}
        />
      ))}
    </div>
  );
};

export default SideBarItems;
