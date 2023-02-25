// libs
import React from "react";
// children
import BannerItems from "../../components/BannerItems";
import Brand from "../../components/Brand";
import SidebarButton from "../../components/SidebarButton";
import ListItems from "../../components/ListItems";
// styles
import styles from "./sidebar.module.scss";

const Sidebar = () => (
  <div className={styles["sidebar-container"]}>
    <Brand />
    <ListItems />
    <BannerItems />
    <SidebarButton />
  </div>
);

export default React.memo(Sidebar);
