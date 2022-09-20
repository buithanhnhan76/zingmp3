// libs
import React from "react";
// component
import RightSideHeader from "src/layouts/Header/mains/RightSideHeader";

export default {
  title: "Layout/Header/Mains",
  component: RightSideHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <RightSideHeader />;

export const RightSideHeaderComponent = Template.bind({});
