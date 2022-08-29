import React from "react";

import Home from "src/pages";

export default {
  title: "Views/Home/HomeComponent",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <Home />;

export const HomeComponent = Template.bind({});

