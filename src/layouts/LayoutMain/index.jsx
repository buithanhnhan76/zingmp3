// style
import styles from "./LayoutMain.module.scss";
// sidebar
import Sidebar from "../Sidebar";
// header
import Header from "../Header";

const LayoutMain = ({ trans, children }) => (
  <div>
    <main className={styles["layout-main-container"]}>
      <Sidebar trans={trans} />
      <div>
        <Header />
        {children}
      </div>
    </main>
  </div>
);

export default LayoutMain;
