// next image
import Image from "next/image";
// redux
import { logIn } from "src/redux/actions/authenticationAction";
import { useDispatch } from "react-redux";
// mocks
import { user } from "src/mocks/UserData/user";
// image
import userPhoto from "public/photos/user.jpg";
// style
import styles from "./LoginButton.module.scss";


const LoginButton = () => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    dispatch(logIn({ user }));
  };

  return (
    <button
      className={styles["login-button-container"]}
      onClick={() => handleLogin()}
      data-cy="login-button"
      type="button"
    >
      <Image
        className={styles["login-button-photo"]}
        width={40}
        height={40}
        src={userPhoto.src}
      />
    </button>
  );
};

export default LoginButton;
