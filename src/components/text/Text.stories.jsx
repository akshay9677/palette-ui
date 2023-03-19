// Text.stories.js,jsx

import React from "react";

import Text from "./Text";

const DefaultObj = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    size: {
      options: [
        "xs",
        "sm",
        "lg",
        "base",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
      control: { type: "radio" },
      defaultValue: "base",
    },
    weight: {
      options: ["light", "medium", "bold", "bolder"],
      control: { type: "radio" },
      defaultValue: "medium",
    },
  },
};

export default DefaultObj;

const Template = (args) => {
  return <Text {...args}>The quick brown fox jumps over the lazy dog</Text>;
};

export const Primary = Template.bind({});
