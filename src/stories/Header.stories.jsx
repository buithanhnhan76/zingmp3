import React from "react";

import Header from "src/layouts/Header";

export default {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <Header {...args}/>
);

export const HeaderComponent = Template.bind({});

