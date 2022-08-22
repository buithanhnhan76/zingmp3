import React from "react";
// partner
import Partner from "src/views/Home/mains/Partner";
// redux
import { Provider } from "react-redux";
import { createCustomStore } from "src/redux/store";
import { translateEnAndLogIn } from "src/mocks/stories/initalState/en";
import { translateViAndLogIn } from "src/mocks/stories/initalState/vi";

export default {
  title: "Layout/Partner",
  component: Partner,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (initalState) => {
  const customStore = createCustomStore(initalState)
  return (
    <Provider store={customStore}>
      <Partner />
    </Provider>
  );
};

export const PartnerInVi = Template.bind({});
PartnerInVi.args = {
  ...translateViAndLogIn
}


export const PartnerInEn = Template.bind({});
PartnerInEn.args = {
  ...translateEnAndLogIn
}
