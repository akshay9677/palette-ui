// Button.stories.js|jsx

import React from "react";

import Button from "./Button";

const DefaultObj = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    appearance: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: "medium",
    },
  },
};

export default DefaultObj;

const Template = (args) => {
  return <Button {...args}>Click Me</Button>;
};

export const Primary = Template.bind({});
