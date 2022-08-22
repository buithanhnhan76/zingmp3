import Partner from "src/views/Home/mains/Partner";
import Event from "src/views/Home/mains/Event";
// style
import styles from "./HomeMain.module.scss";

const HomeMain = () => (
  <div className={styles["home-main-container"]}>
    <Event />
    <Partner />
  </div>
);

export default HomeMain;
