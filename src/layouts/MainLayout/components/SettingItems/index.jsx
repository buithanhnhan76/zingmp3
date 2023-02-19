// libs
import React from "react";
// mocks
import { listSettingItems } from "src/mocks/Header/HeaderMockData";
// component
import SettingItem from "../SettingItem";
// style
import styles from "./SettingItems.module.scss";

const SettingItems = () => (
  <div className={styles["setting-items-container"]}>
    {listSettingItems.map((item) => (
      <SettingItem item={item} key={item.id} />
    ))}
  </div>
);

export default React.memo(SettingItems);
