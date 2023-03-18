import React, { useEffect, useState } from "react";

import Radio from "./Radio";

const Default = {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    checked: { type: "boolean", defaultValue: false },
  },
};

export default Default;

const Template = (args) => {
  return <Radio {...args}>Radio</Radio>;
};

export const Primary = Template.bind({});
