// libs
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
// Sidebar and header
import Sidebar from "../Sidebar";
import Header from "../Header";
// hook
import useTranslate from "src/hooks/useStranslate";
// action
import { updateLocale } from "src/redux/actions/authenticationAction";
// style
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  const translate = useTranslate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateLocale({ translate }));
  },[translate]);

  return (
    <div>
      <main className={styles["main-layout-container"]}>
        <Sidebar />
        <div>
          <Header />
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
