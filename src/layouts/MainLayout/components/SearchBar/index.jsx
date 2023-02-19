// libs
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
// style
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const { placeholder } = useSelector(
    (state) => state.locale.translate.header.searchBar
  );
  return (
    <div className={styles["search-bar-container"]}>
      <SearchOutlined style={{ fontSize: "16px", color: "#b3b2b6" }} />
      <input placeholder={placeholder} className={styles["search-bar"]} />
    </div>
  );
};

export default React.memo(SearchBar);
