import { SearchOutlined } from "@ant-design/icons";
import styles from "./header-search.module.scss";

const HeaderSearch = () => (
  <div className={styles["header-search-container"]}>
    <SearchOutlined />
    <input
      placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      className={styles["header-search"]}
    />
  </div>
);

export default HeaderSearch;
