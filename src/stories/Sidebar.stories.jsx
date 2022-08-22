import React from "react";

import Sidebar from "src/layouts/Sidebar";

// redux
import { Provider } from "react-redux";
import { translateViAndLogIn } from "src/mocks/stories/initalState/vi";
import { translateEnAndLogIn } from "src/mocks/stories/initalState/en";
import { createCustomStore } from "src/redux/store";

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (initalState) => {
  const customStore = createCustomStore(initalState)
  return (
    <Provider store={customStore}>
      <Sidebar />
    </Provider>
  );
};

export const SidebarInVi = Template.bind({});
SidebarInVi.args = {
...translateViAndLogIn
};

export const SidebarInEn = Template.bind({});
SidebarInEn.args = {
  ...translateEnAndLogIn,
};
