import React from "react";

import Input from "./Input";

const Default = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Input",
  component: Input,
};

export default Default;

const Template = (args) => {
  return <Input {...args} placeholder={args.placeholder || "Enter a name"} />;
};

export const Primary = Template.bind({});
