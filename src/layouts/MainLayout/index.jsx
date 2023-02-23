/* eslint-disable react-hooks/exhaustive-deps */
// libs
import React from "react";
// component
import Sidebar from "./mains/Sidebar";
import MainPage from "./mains/MainPage";
// style
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => (
  <div>
    <main className={styles["main-layout-container"]}>
      <Sidebar />
      <MainPage>{children}</MainPage>
    </main>
  </div>
);

export default React.memo(MainLayout);
