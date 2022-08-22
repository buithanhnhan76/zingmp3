import styles from "./EventItem.module.scss";
import Image from "next/image";
import EventItemHeader from "../EventItemHeader";
import EventItemFooter from "../EventItemFooter";

const EventItem = ({ item }) => (
  <div className={styles["event-item-container"]}>
    <EventItemHeader item={item} />
    <EventItemFooter item={item} />
  </div>
);

export default EventItem;
