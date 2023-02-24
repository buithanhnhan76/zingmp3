// libs
import React from "react";
// children
import Header from "../../components/Header";
// styles
import styles from "./MainPage.module.scss";

const MainPage = ({ children }) => (
  <div className={styles["main-page"]}>
    <Header />
    {children}
  </div>
);

export default React.memo(MainPage);
