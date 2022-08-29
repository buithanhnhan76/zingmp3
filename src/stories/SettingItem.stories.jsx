// libs
import React from "react";
// photos
import Clip from "public/icons/clip.svg";

// component
import SettingItem from "src/layouts/Header/components/SettingItem";

export default {
  title: "Layout/Header/Components/SettingItem",
  component: SettingItem,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <SettingItem {...args} />;

export const SettingItemComponent = Template.bind({});
SettingItemComponent.args = {
    item: {
        src: Clip.src,
        id: 1
    }
}
