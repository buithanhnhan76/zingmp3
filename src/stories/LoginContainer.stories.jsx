import React from "react";

// login container
import LoginContainer from "src/layouts/Header/components/LoginContainer";

// redux
import { Provider } from "react-redux";
import { logIn } from "src/mocks/stories/initalState/vi";
import { createCustomStore } from "src/redux/store";

export default {
  title: "Layout/Header/LoginContainer",
  component: LoginContainer,
  parameters: {
    layout: "centered",
  },
};

const Template = (initalState) => {
  const customStore = createCustomStore(initalState);
  return (
    <Provider store={customStore}>
      <LoginContainer />
    </Provider>
  );
};

export const LogIn = Template.bind({});
LogIn.args = {
  ...logIn,
};
export const NotLogIn = Template.bind({});
