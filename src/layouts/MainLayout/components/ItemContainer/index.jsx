// childrem
import LineItem from "../LineItem";
import ListItem from "../ListItem";

const ItemContainer = ({ item, selectedSideBarItem, setSelectedSideBarItem }) =>
  item.title ? (
    <ListItem
      item={item}
      selectedSideBarItem={selectedSideBarItem}
      setSelectedSideBarItem={setSelectedSideBarItem}
    />
  ) : (
    <LineItem />
  );

export default ItemContainer;
