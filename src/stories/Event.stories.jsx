import React from "react";
// partner
import Event from "src/views/Home/mains/Event";
// redux
// import { Provider } from "react-redux";
// import { createCustomStore } from "src/redux/store";
// import { translateEnAndLogIn } from "src/mocks/stories/initalState/en";
// import { translateViAndLogIn } from "src/mocks/stories/initalState/vi";
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

export const EventDemo = Template.bind({});
EventDemo.args = {
  items: listEvents,
}