import React from "react";

import SidebarButton from "src/layouts/Sidebar/mains/SidebarButton";

export default {
  title: "Layout/Sidebar/Mains",
  component: SidebarButton,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <SidebarButton />;

export const SidebarButtonComponent = Template.bind({});
