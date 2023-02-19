// libs
import { useState } from "react";
import { useSelector } from "react-redux";
// component
import ItemContainer from "../ItemContainer";
// style
import styles from "./ListItems.module.scss";

const ListItems = () => { 
  // selected sidebar item
  const [selectedSideBarItem, setSelectedSideBarItem] = useState("");
  const items = useSelector((state) => state.locale.translate.sidebar.items);
  return (
    <ul className={styles["list-items-container"]}>
      {items &&
        items.map((item) => (
          <ItemContainer
            key={item.title}
            item={item}
            selectedSideBarItem={selectedSideBarItem}
            setSelectedSideBarItem={setSelectedSideBarItem}
          />
        ))}
    </ul>
  );
};

export default ListItems;
