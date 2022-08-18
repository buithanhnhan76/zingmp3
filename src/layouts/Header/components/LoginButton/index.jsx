import styles from "./LoginButton.module.scss";
// next image
import Image from "next/image";

const LoginButton = () => (
  <div className={styles["login-button-container"]}>
    <Image
      className={styles["login-button-photo"]}
      width={40}
      height={40}
      src="/photos/user.jpg"
    />
  </div>
);

export default LoginButton;
