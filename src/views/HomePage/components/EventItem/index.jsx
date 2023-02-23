// children
import EventItemHeader from "../EventItemHeader";
import EventItemFooter from "../EventItemFooter";
// styles
import styles from "./EventItem.module.scss";

const EventItem = ({ item, order }) => (
  <div className={styles["event-item"]} order={order}>
    <EventItemHeader item={item} />
    <EventItemFooter item={item} />
  </div>
);

export default EventItem;
