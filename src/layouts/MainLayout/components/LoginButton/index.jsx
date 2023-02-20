// libs
import Image from "next/legacy/image";
// redux
import { logIn } from "src/redux/actions/authentication";
import { useDispatch } from "react-redux";
// mocks
import { user } from "src/mocks/UserData/user";
// photo
import userPhoto from "public/photos/user.jpg";
// styles
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
        layout="fill"
        objectFit="cover"
        src={userPhoto.src}
        alt="login button"
      />
    </button>
  );
};

export default LoginButton;
