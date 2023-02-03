// childrem
import SidebarLineItem from "../SidebarLineItem";
import SidebarCategoryItem from "../SidebarCategoryItem";

const SidebarItem = ({ item, selectedSideBarItem, setSelectedSideBarItem }) =>
  item.title ? (
    <SidebarCategoryItem
      item={item}
      selectedSideBarItem={selectedSideBarItem}
      setSelectedSideBarItem={setSelectedSideBarItem}
    />
  ) : (
    <SidebarLineItem />
  );

export default SidebarItem;
