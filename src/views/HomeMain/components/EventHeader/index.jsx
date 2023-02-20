// libs
import React from "react";
// children
import EventTitle from "../EventTitle";
import HeaderButton from "../HeaderButton";
// styles
import styles from "./EventHeader.module.scss";

const EventHeader = () => (
  <div className={styles["event-header"]}>
    <EventTitle />
    <HeaderButton />
  </div>
);

export default EventHeader;
