import { SearchOutlined } from "@ant-design/icons";
import styles from "./HeaderLeftSearch.module.scss";

const HeaderLeftSearch = () => (
  <div className={styles["header-search-container"]}>
    <SearchOutlined />
    <input
      placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      className={styles["header-search"]}
    />
  </div>
);

export default HeaderLeftSearch;
