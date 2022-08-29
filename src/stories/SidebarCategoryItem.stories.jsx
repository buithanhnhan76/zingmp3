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

let item = { title: "Radio" };
const selectedSibarItem = "Radio";
const setSelectedSideBarItem = () => {};

const Template = (args) => <SidebarCategoryItem {...args} />;

export const SidebarComponent = Template.bind({});
SidebarComponent.args = {
  item: item,
  selectedSideBarItem: selectedSibarItem,
  setSelectedSideBarItem: setSelectedSideBarItem,
};
