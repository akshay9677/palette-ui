// Button.stories.js|jsx

import React from "react";

import Button from "./Button";

const Default = {
  title: "Components/Button",
  component: Button,
  args: {},
  argTypes: {},
};

export default Default;

export const Primary = ({ ...args }) => <Button>Button</Button>;
