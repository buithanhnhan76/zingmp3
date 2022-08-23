// child
import EventItemHeader from "../EventItemHeader";
import EventItemFooter from "../EventItemFooter";
// style
import styles from "./EventItem.module.scss";

const EventItem = ({ item }) => (
  <div className={styles["event-item-container"]}>
    <EventItemHeader item={item} />
    <EventItemFooter item={item} />
  </div>
);

export default EventItem;
