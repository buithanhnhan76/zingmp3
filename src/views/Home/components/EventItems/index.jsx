import EventItem from "../EventItem";
// style
import styles from "./EventItems.module.scss";

const EventItems = ({ items }) => (
  <div className={styles["event-items-container"]}>
    {items.map((item) => (
      <EventItem item={item}></EventItem>
    ))}
  </div>
);

export default EventItems;
