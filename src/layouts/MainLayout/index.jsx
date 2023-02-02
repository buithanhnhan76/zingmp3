/* eslint-disable react-hooks/exhaustive-deps */
// libs
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
// hook
import useTranslate from "src/hooks/useStranslate";
// action
import { updateLocale } from "src/redux/actions/authenticationAction";
// component
import Sidebar from "../Sidebar";
import MainBar from "../MainBar";
// style
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  const translate = useTranslate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateLocale({ translate }));
  }, [translate]);

  return (
    <div>
      <main className={styles["main-layout-container"]}>
        <Sidebar />
        <MainBar>
          {children}
        </MainBar>
      </main>
    </div>
  );
};

export default MainLayout;
