import React from "react";
// partner
import Partner from "src/views/Home/mains/Partner";

export default {
  title: "Views/Home/Mains/Partner",
  component: Partner,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <Partner />;

export const PartnerComponent = Template.bind({});
