// libs
import React from "react";
// component
import HistoryButton from "src/layouts/Header/components/HistoryButton";

export default {
  title: "Layout/Header/Components/HistoryButton",
  component: HistoryButton,
  parameters: {
    layout: "centered",
  },
};

const Template = () => <HistoryButton />;

export const HistoryButtonComponent = Template.bind({});
