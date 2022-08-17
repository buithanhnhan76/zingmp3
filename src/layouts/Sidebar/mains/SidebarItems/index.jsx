import { useState } from 'react';
// f2 component
import SidebarItem from '../../components/SidebarItem';
// style
import styles from './SidebarItems.module.scss';

const SidebarItems = ({ trans }) => {
  // selected sidebar item
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
