// search icon
import { SearchOutlined } from "@ant-design/icons";
// style
import styles from "./HeaderLeftSearch.module.scss";

const HeaderLeftSearch = () => (
  <div className={styles["header-left-search-container"]}>
    <SearchOutlined style={{ fontSize: "16px", color: "#b3b2b6" }} />
    <input
      placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      className={styles["header-left-search"]}
    />
  </div>
);

export default HeaderLeftSearch;
