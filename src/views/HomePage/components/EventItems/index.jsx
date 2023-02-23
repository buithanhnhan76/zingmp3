// mocks
import { listEvents } from "src/mocks/Event";
// child
import EventItem from "../EventItem";
// styles
import styles from "./EventItems.module.scss";

const EventItems = () => (
  <div className={styles["event-items"]}>
    {listEvents.map((item, index) => (
      <EventItem item={item} key={item.id} order={index} />
    ))}
  </div>
);

export default EventItems;
