import styles from "./HeaderRightLogin.module.scss";
// next image
import Image from "next/image";

const HeaderRightLogin = () => (
  <div className={styles["header-right-login-container"]}>
    <Image
      className={styles["header-right-login-photo"]}
      width={40}
      height={40}
      src="/photos/user.jpg"
    />
  </div>
);

export default HeaderRightLogin;
