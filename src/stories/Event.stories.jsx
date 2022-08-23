import React from "react";
// Event
import Event from "src/views/Home/mains/Event";
// mock
import { listEvents } from "src/mocks/Event";

export default {
  title: "Views/Home/Event",
  component: Event,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => {
  return (
      <Event {...args}/>
  );
};

export const EventComponent = Template.bind({});
EventComponent.args = {
  items: listEvents,
}