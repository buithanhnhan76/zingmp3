import React from "react";

// component
import SideBarBrand from "src/layouts/Sidebar/mains/SidebarBrand";

export default {
  title: "Layout/Sidebar/Mains",
  component: SideBarBrand,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <SideBarBrand />;

export const SidebarBrandComponent = Template.bind({});
