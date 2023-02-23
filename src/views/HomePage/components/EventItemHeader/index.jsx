// libs
import Image from "next/legacy/image";
// children
import EventItemContent from "../EventItemContent";
// styles
import styles from "./EventItemHeader.module.scss";

const EventItemHeader = ({ item }) => (
  <div className={styles["event-item-header"]}>
    <Image layout="fill" objectFit="cover" src={item.src} />
    <EventItemContent item={item} />
    <div className={styles["event-item-header-opacity"]} />
  </div>
);

export default EventItemHeader;
