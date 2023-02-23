// children
import EventHeader from "../../components/EventHeader";
import EventItems from "../../components/EventItems";
// styles
import styles from "./Event.module.scss";

const Event = () => (
  <section className={styles.event}>
    <EventHeader />
    <EventItems />
  </section>
);

export default Event;
