// libs
import React from "react";
import { useSelector } from "react-redux";
// children
import LoginButton from "../LoginButton";
import UserButton from "../UserButton";

const LoginContainer = () => {
  const authentication = useSelector((state) => state.authentication);

  return !Object.keys(authentication.user).length ? (
    <LoginButton />
  ) : (
    <UserButton {...authentication.user} />
  );
};

export default React.memo(LoginContainer);
