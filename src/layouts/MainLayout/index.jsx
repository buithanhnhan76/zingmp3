/* eslint-disable react-hooks/exhaustive-deps */
// libs
import React from "react";
// component
import Sidebar from "./mains/Sidebar";
import MainBar from "./mains/MainBar";
// style
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div>
      <main className={styles["main-layout-container"]}>
        <Sidebar />
        <MainBar>{children}</MainBar>
      </main>
    </div>
  );
};

export default React.memo(MainLayout);
