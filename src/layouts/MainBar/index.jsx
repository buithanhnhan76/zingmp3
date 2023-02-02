import Header from "../Header";
// styles
import styles from "./MainBar.module.scss";

const MainBar = ({ children }) => (
  <div className={styles["mainbar-container"]}>
    <Header />
    {children}
  </div>
);

export default MainBar;
