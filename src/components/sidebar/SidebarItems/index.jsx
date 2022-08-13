import { useState } from 'react';
import SidebarItem from './sidebaritem';
import styles from './SidebarItems.module.scss';

const SidebarItems = ({ trans }) => {
  const [selectedSideBarItem, setSelectedSideBarItem] = useState('');
  return (
    <div className={styles['side-bar-items-container']}>
      {trans.sidebar.items.map((item) => (
        <SidebarItem
          key={item.title}
          item={item}
          selectedSideBarItem={selectedSideBarItem}
          setSelectedSideBarItem={setSelectedSideBarItem}
        />
      ))}
    </div>
  );
};

export default SidebarItems;
