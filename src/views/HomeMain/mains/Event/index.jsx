// mocks
import { listEvents } from "src/mocks/Event";
// children
import EventHeader from "../../components/EventHeader";
import EventItems from "../../components/EventItems";
// styles
import styles from "./Event.module.scss";

const Event = () => (
  <div className={styles["event-container"]}>
    <EventHeader />
    <EventItems items={listEvents} />
  </div>
);

export default Event;
