// children
import LoginButton from "../LoginButton";
import UserButton from "../UserButton";

// redux
import { useSelector } from "react-redux";

const LoginContainer = () => {

  const {authentication} = useSelector((state) => state);

  return !Object.keys(authentication.user).length ? (
    <LoginButton />
  ) : (
    <UserButton {...authentication.user} />
  );
};

export default LoginContainer;
