import React from "react";
// Event
import Event from "src/views/Home/mains/Event";

export default {
  title: "Views/Home/Mains/Event",
  component: Event,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Event {...args} />;

export const EventComponent = Template.bind({});
