// libs
import { SearchOutlined } from "@ant-design/icons";
// redux
import { useSelector } from "react-redux";
// style
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const { translate } = useSelector((state) => state.locale);
  return (
    <div className={styles["search-bar-container"]}>
      <SearchOutlined style={{ fontSize: "16px", color: "#b3b2b6" }} />
      <input
        placeholder={translate.header.searchBar.placeholder}
        className={styles["search-bar"]}
      />
    </div>
  );
};

export default SearchBar;
