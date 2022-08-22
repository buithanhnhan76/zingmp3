import React from "react";

import LayoutMain from "src/layouts/LayoutMain";

// redux
import { Provider } from "react-redux";
import { createCustomStore } from "src/redux/store";
// inital state
import {
  translateEnAndLogIn,
  translateEnAndNotLogIn,
} from "src/mocks/stories/initalState/en";
import {
  translateViAndLogIn,
  translateViAndNotLogIn,
} from "src/mocks/stories/initalState/vi";

export default {
  title: "Layout/LayoutMain",
  component: LayoutMain,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (initalState) => {
  const customStore = createCustomStore(initalState);
  return (
    <Provider store={customStore}>
      <LayoutMain />
    </Provider>
  );
};

export const LayoutMainInViAndLogIn = Template.bind({});
LayoutMainInViAndLogIn.args = {
  ...translateViAndLogIn,
};

export const LayoutMainInViAndNotLogIn = Template.bind({});
LayoutMainInViAndNotLogIn.args = {
  ...translateViAndNotLogIn,
};

export const LayoutMainInEnAndLogIn = Template.bind({});
LayoutMainInEnAndLogIn.args = {
  ...translateEnAndLogIn,
};

export const LayoutMainInEnAndNotLogIn = Template.bind({});
LayoutMainInEnAndNotLogIn.args = {
  ...translateEnAndNotLogIn,
};
