import React from "react";

// login container
import LoginContainer from "src/layouts/Header/components/LoginContainer";

// mock
import userPhoto from "src/mocks/UserData/userPhoto.jpg";

export default {
  title: "Layout/Header/LoginContainer",
  component: LoginContainer,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <LoginContainer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
    src: userPhoto.src
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
