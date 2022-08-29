// Sidebar and header
import Sidebar from "../Sidebar";
import Header from "../Header";
// style
import styles from "./LayoutMain.module.scss";

const LayoutMain = ({ children }) => (
  <div>
    <main className={styles["layout-main-container"]}>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </main>
  </div>
);

export default LayoutMain;
