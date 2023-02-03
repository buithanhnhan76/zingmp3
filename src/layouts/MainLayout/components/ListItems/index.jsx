// libs
import { useState } from "react";
import { useSelector } from "react-redux";
// component
import SidebarItem from "../SidebarItem";
// style
import styles from "./ListItems.module.scss";

const ListItems = () => { 
  // selected sidebar item
  const [selectedSideBarItem, setSelectedSideBarItem] = useState("");
  const { items } = useSelector((state) => state.locale.translate.sidebar);
  return (
    <div className={styles["list-items-container"]}>
      {items && items.map((item) => (
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

export default ListItems;
