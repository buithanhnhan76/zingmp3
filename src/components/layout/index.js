import SideBar from "../sidebar";
import Header from "../header";
import styles from "./layout.module.scss";

const LayOut = ({ children, trans }) => (
  <main className={styles["layout-main"]}>
    <SideBar trans={trans} />
    <div>
      <Header />
      {children}
    </div>
  </main>
);

export default LayOut;
