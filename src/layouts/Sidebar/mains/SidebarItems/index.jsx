import { useState } from "react";
// children
import SidebarItem from "../../components/SidebarItem";
// style
import styles from "./SidebarItems.module.scss";

const SidebarItems = ({ translate }) => {
  // selected sidebar item
  const [selectedSideBarItem, setSelectedSideBarItem] = useState("");
  return (
    <div className={styles["side-bar-items-container"]}>
      {translate.sidebar.items.map((item) => (
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
