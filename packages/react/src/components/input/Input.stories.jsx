import React from "react";

import Input from "./Input";

const Default = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Input",
  component: Input,
};

export default Default;

export const Primary = () => <Input />;
