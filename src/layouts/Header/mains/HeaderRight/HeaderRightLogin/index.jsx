import styles from "./HeaderRightLogin.module.scss";
import Image from 'next/image';

const HeaderRightLogin = () => (
  <div>
    <Image className={styles["header-right-login-photo"]} width={40} height={40} src="/photos/user.jpg" />
  </div>
);

export default HeaderRightLogin;
