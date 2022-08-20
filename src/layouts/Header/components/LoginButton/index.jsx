// next image
import Image from "next/image";
// redux
import { logIn } from "src/redux/actions/authenticationAction";
import { useDispatch, useSelector } from "react-redux";
// mocks
import {user} from "src/mocks/UserData/user";
import styles from "./LoginButton.module.scss";


const LoginButton = () => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    dispatch(logIn({user}));
  };

  return <button className={styles["login-button-container"]} onClick={() => handleLogin()}>
    <Image
      className={styles["login-button-photo"]}
      width={40}
      height={40}
      src="/photos/user.jpg"
    />
  </button>
};

export default LoginButton;
