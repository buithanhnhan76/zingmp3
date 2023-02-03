// childrem
import SidebarLineItem from "../SidebarLineItem";
import ListItem from "../ListItem";

const SidebarItem = ({ item, selectedSideBarItem, setSelectedSideBarItem }) =>
  item.title ? (
    <ListItem
      item={item}
      selectedSideBarItem={selectedSideBarItem}
      setSelectedSideBarItem={setSelectedSideBarItem}
    />
  ) : (
    <SidebarLineItem />
  );

export default SidebarItem;
