// style
import styles from "./LoginBanner.module.scss";

const LoginBanner = ({ item }) => (
  <div className={styles["login-banner-container"]}>
    <h3>{item.title}</h3>
    <button type="button" className={styles["login-banner-button"]}>
      {item.buttonLabel}
    </button>
  </div>
);

export default LoginBanner;
