/* eslint-disable react-hooks/exhaustive-deps */
// libs
import React from "react";
import classNames from "classnames";
// component
import Sidebar from "./mains/Sidebar";
import MainPage from "./mains/MainPage";
// style
import styles from "./MainLayout.module.scss";

const MainLayout = ({ className, children }) => (
  <div className={classNames(className, styles["main-layout-container"])}>
    <Sidebar />
    <MainPage>{children}</MainPage>
  </div>
);

export default React.memo(MainLayout);
