import React from "react";

// login container
import LoginContainer from "src/layouts/Header/components/LoginContainer";

export default {
  title: "Layout/Header/Components/LoginContainer",
  component: LoginContainer,
  parameters: {
    layout: "centered",
  },
};

const Template = () => <LoginContainer />;

export const LoginContainerComponent = Template.bind({});
