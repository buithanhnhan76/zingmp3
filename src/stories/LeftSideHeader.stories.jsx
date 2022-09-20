// libs
import React from "react";
// component
import LeftSideHeader from "src/layouts/Header/mains/LeftSideHeader";

export default {
  title: "Layout/Header/Mains",
  component: LeftSideHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <LeftSideHeader />;

export const LeftSideHeaderComponent = Template.bind({});
