// libs
import React from "react";
// component
import Header from "src/layouts/Header";

export default {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <Header />;

export const HeaderComponent = Template.bind({});
