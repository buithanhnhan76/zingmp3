import React from "react";

// login container
import SearchBar from "src/layouts/Header/components/SearchBar";

export default {
  title: "Layout/Header/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
};

const Template = () => <SearchBar />;

export const SearchBarComponent = Template.bind({});
