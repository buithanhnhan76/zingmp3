import { useState } from "react";
// children
import SidebarItem from "../../components/SidebarItem";
// redux
import { useSelector } from "react-redux";
// style
import styles from "./SidebarItems.module.scss";

const SidebarItems = () => {
  // redux
  const {items} = useSelector((state) => state.locale.translate.sidebar);
  // selected sidebar item
  const [selectedSideBarItem, setSelectedSideBarItem] = useState("");
  return (
    <div className={styles["side-bar-items-container"]}>
      {items.map((item) => (
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
