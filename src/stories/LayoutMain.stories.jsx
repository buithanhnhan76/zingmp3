import React from "react";

import LayoutMain from "src/layouts/LayoutMain";

export default {
  title: "Layout/LayoutMain",
  component: LayoutMain,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <LayoutMain />;

export const LayoutMainComponent = Template.bind({});
LayoutMainComponent.args = {
  ...LayoutMainComponent,
};
