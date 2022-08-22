// child
import EventItems from "../../components/EventItems";
// mocks
import { listEvents } from "src/mocks/Event";
// style
import styles from "./Event.module.scss";

const Event = () => {
  return (
    <div className={styles["event-container"]}>
      <h3 className={styles["event-title"]}>Sự Kiện</h3>
      <EventItems items={listEvents}></EventItems>
    </div>
  );
};

export default Event;
