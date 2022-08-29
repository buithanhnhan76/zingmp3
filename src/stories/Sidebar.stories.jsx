import React from "react";

import Sidebar from "src/layouts/Sidebar";

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <Sidebar />;

export const SidebarComponent = Template.bind({});
