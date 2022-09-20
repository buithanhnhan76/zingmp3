// libs
import React from "react";
// component
import SidebarCategoryItem from "src/layouts/Sidebar/components/SidebarCategoryItem";

export default {
  title: "Layout/Sidebar/Components",
  component: SidebarCategoryItem,
  parameters: {
    layout: "centered",
  },
};

// varibles
const item = { title: "Radio" };
const selectedSideBarItem = "Radio";
const setSelectedSideBarItem = () => {};

const Template = (args) => <SidebarCategoryItem {...args} />;

export const SidebarComponent = Template.bind({});
SidebarComponent.args = {
  item,
  selectedSideBarItem,
  setSelectedSideBarItem,
};
