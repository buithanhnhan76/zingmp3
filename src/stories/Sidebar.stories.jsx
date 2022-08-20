import React from "react";

import Sidebar from "src/layouts/Sidebar";

// mocks data
import vi from "public/locale/vi";
import en from "public/locale/en";

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Sidebar {...args} />;

export const SidebarVi = Template.bind({});
SidebarVi.args = {
    translate: vi
}

export const SidebarEn = Template.bind({});
SidebarEn.args = {
  translate: en,
};