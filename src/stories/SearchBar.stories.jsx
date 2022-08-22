import React from "react";

// login container
import SearchBar from "src/layouts/Header/components/SearchBar";

// redux
import { Provider } from "react-redux";
import { createCustomStore } from "src/redux/store";
import { translateEnAndLogIn } from "src/mocks/stories/initalState/en";
import { translateViAndLogIn } from "src/mocks/stories/initalState/vi";

export default {
  title: "Layout/Header/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
};

const Template = (initalState) => {
  const customStore = createCustomStore(initalState);
  return (
    <Provider store={customStore}>
      <SearchBar />
    </Provider>
  );
};

export const SearchBarInVi = Template.bind({});
SearchBarInVi.args = {
  ...translateViAndLogIn,
};

export const SearchBarInEn = Template.bind({});
SearchBarInEn.args = {
  ...translateEnAndLogIn,
};
