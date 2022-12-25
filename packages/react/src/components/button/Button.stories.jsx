// Button.stories.js|jsx

import React from "react";

import Button from "./Button";

const DefaultObj = {
  title: "Components/Button",
  component: Button,
};

export default DefaultObj;

const Template = (args) => {
  return <Button {...args}>Click Me</Button>;
};

export const Primary = Template.bind({});
