// libs
import Image from "next/image";
import { useDispatch } from "react-redux";
// redux
import { logOut } from "src/redux/actions/authentication";
// style
import styles from "./UserButton.module.scss";

const UserButton = ({ src }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logOut());
  };
  return (
    <button className={styles["user-button"]} onClick={() => handleLogout()} data-cy="user-button" type="button">
      <Image
        layout="fill"
        objectFit="cover"
        src={src}
      />
    </button>
  );
};

export default UserButton;
