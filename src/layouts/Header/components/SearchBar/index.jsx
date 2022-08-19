// libs
import { SearchOutlined } from "@ant-design/icons";
// style
import styles from "./SearchBar.module.scss";

const SearchBar = () => (
  <div className={styles["search-bar-container"]}>
    <SearchOutlined style={{ fontSize: "16px", color: "#b3b2b6" }} />
    <input
      placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      className={styles["search-bar"]}
    />
  </div>
);

export default SearchBar;
