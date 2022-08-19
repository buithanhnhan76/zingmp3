import Sidebar from "../Sidebar";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = ({ children, trans }) => (
  <main className={styles["layout-main"]}>
    <Sidebar trans={trans} />
    <div>
      <Header />
      {children}
    </div>
  </main>
);

export default Layout;
