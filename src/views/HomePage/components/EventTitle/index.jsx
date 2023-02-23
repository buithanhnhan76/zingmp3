// libs
import { useSelector } from "react-redux";
// styles
import styles from "./EventTitle.module.scss";

const EventTitle = () => {
  const title = useSelector((state) => state.locale.translate.event.title);
  return <h3 className={styles["event-title"]}>{title}</h3>;
};

export default EventTitle;
