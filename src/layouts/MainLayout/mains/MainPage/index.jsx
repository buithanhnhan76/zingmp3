// libs
import React from "react";
// children
import Header from "../../components/Header";
// styles
import styles from "./MainPage.module.scss";

const MainPage = ({ children }) => (
  <div className={styles.mainpage}>
    <Header />
    {children}
  </div>
);

export default React.memo(MainPage);
