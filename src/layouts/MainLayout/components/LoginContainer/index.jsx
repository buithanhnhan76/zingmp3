// libs
import { useSelector } from "react-redux";
// children
import LoginButton from "../LoginButton";
import UserButton from "../UserButton";

const LoginContainer = () => {
  const { authentication } = useSelector((state) => state);

  return !Object.keys(authentication.user).length ? (
    <LoginButton />
  ) : (
    <UserButton {...authentication.user} />
  );
};

export default LoginContainer;
