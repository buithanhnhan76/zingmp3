import React from "react";

import Header from "src/layouts/Header";

// redux
import { Provider } from "react-redux";
import { createCustomStore } from "src/redux/store";
import {
  translateEnAndLogIn,
  translateEnAndNotLogIn,
} from "src/mocks/stories/initalState/en";
import {
  translateViAndLogIn,
  translateViAndNotLogIn,
} from "src/mocks/stories/initalState/vi";

export default {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (initalState) => {
  const customStore = createCustomStore(initalState);
  return (
    <Provider store={customStore}>
      <Header />
    </Provider>
  );
};

export const HeaderInViAndLogIn = Template.bind({});
HeaderInViAndLogIn.args = {
  ...translateViAndLogIn,
};

export const HeaderInViAndNotLogIn = Template.bind({});
HeaderInViAndNotLogIn.args = {
  ...translateViAndNotLogIn,
};

export const HeaderInEnAndLogIn = Template.bind({});
HeaderInEnAndLogIn.args = {
  ...translateEnAndLogIn,
};

export const HeaderInEnAndNotLogIn = Template.bind({});
HeaderInEnAndNotLogIn.args = {
  ...translateEnAndNotLogIn,
};
