// Sidebar and header
import Sidebar from "../Sidebar";
import Header from "../Header";
// style
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => (
  <div>
    <main className={styles["main-layout-container"]}>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </main>
  </div>
);

export default MainLayout;
