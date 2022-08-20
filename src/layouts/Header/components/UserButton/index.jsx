// next image
import Image from "next/image";
// redux
import { logOut } from "src/redux/actions/authenticationAction";
import { useDispatch } from "react-redux";
import styles from "./UserButton.module.scss";

const UserButton = ({src}) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logOut());
  };
  return <button className={styles["user-button"]} onClick={() => handleLogout()}>
    <Image
      className={styles["user-button-photo"]}
      width={40}
      height={40}
      src={src}
    />
  </button>
};

export default UserButton;
