import React from "react";

import TextArea from "./TextArea";

const Default = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/TextArea",
  component: TextArea,
};

export default Default;

const Template = (args) => {
  return (
    <TextArea {...args} placeholder={args.placeholder || "Enter a name"} />
  );
};

export const Primary = Template.bind({});
