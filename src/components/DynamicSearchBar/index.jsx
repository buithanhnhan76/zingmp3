// libs
import React, { useState, useCallback } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
// hook
import useDebounce from "src/hooks/useDebounce";
import useHandleClickOutSide from "src/hooks/useHandleClickOutside";
// mock
import { listNewRelease } from "src/mocks/NewRelease";
// styles
import styles from "./DynamicSearchBar.module.scss";

const DynamicSearchBar = () => {
  const placeholder = useSelector(
    (state) => state.locale.translate.header.searchBar.placeholder
  );
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useDebounce(
    () =>
      setSearchResult(() => {
        if (userInput === "") return [];
        return listNewRelease.filter((item) =>
          item.title.toLowerCase().includes(userInput.toLowerCase())
        );
      }),
    [userInput, listNewRelease],
    1000
  );

  useHandleClickOutSide("search-bar-result", setSearchResult, []);

  const handleChangeUserInput = (e) => {
    setUserInput(() => e.target.value);
  };

  return (
    <div className={styles["dynamic-search-bar"]}>
      <div className={styles["dynamic-search-bar__input-container"]}>
        <SearchOutlined style={{ fontSize: "16px", color: "#b3b2b6" }} />
        <input
          value={userInput}
          onChange={(e) => handleChangeUserInput(e)}
          placeholder={placeholder}
          className={styles["dynamic-search-bar__input"]}
        />
      </div>
      {searchResult.length !== 0 && (
        <ul
          className={styles["dynamic-search-bar__result"]}
          id="search-bar-result"
        >
          <li>Đề xuất cho bạn !</li>
          {searchResult.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(DynamicSearchBar);
