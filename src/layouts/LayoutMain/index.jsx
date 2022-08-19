// sidebar
import Sidebar from "../Sidebar";
// header
import Header from "../Header";
// style
import styles from "./LayoutMain.module.scss";

const LayoutMain = ({ translate, children }) => (
  <div>
    <main className={styles["layout-main-container"]}>
      <Sidebar translate={translate} />
      <div>
        <Header />
        {children}
      </div>
    </main>
  </div>
);

export default LayoutMain;
