// child
import EventItems from "../../components/EventItems";
// mocks
import { listEvents } from "src/mocks/Event";
import HeaderButton from "../../components/HeaderButton";
// style
import styles from "./Event.module.scss";

const Event = () => {
  return (
    <div className={styles["event-container"]}>
      <div className={styles["event-titlte-container"]}>
        <h3 className={styles["event-title"]}>Sự Kiện</h3>
        <HeaderButton />
      </div>
      <EventItems items={listEvents}></EventItems>
    </div>
  );
};

export default Event;
