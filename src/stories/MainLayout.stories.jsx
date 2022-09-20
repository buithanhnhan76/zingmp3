// libs
import React from "react";
// component
import MainLayout from "src/layouts/MainLayout";

export default {
  title: "Layout/MainLayout",
  component: MainLayout,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <MainLayout />;

export const MainLayoutComponent = Template.bind({});

MainLayoutComponent.parameters =  {
  nextRouter: {
    locale: "vi"
  }
}
