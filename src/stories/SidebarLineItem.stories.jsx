import React from "react";

// component
import SidebarLineItem from "src/layouts/Sidebar/components/SidebarLineItem";

export default {
  title: "Layout/Sidebar/Components",
  component: SidebarLineItem,
  parameters: {
    layout: "centered",
  },
};

const Template = () => <SidebarLineItem />;

export const SidebarLineItemComponent = Template.bind({});
