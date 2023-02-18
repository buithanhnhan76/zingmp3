// mocks
import { listEvents } from "src/mocks/Event";
// children
import EventItems from "../../components/EventItems";
import HeaderButton from "../../components/HeaderButton";
// styles
import styles from "./Event.module.scss";

const Event = () => (
  <div className={styles["event-container"]}>
    <div className={styles["event-titlte-container"]}>
      <h3 className={styles["event-title"]}>Sự Kiện</h3>
      <HeaderButton />
    </div>
    <EventItems items={listEvents} />
  </div>
);

export default Event;