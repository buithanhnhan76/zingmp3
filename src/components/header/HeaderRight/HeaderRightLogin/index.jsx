import user from "../../../../../public/photos/user.jpg";
import styles from "./HeaderRightLogin.module.scss";

const HeaderRightLogin = () => (
  <div>
    <img className={styles["header-right-login-photo"]} src={user.src} />
  </div>
);

export default HeaderRightLogin;
