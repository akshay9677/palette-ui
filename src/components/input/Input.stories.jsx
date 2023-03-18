import React, { useState } from "react";

import Input from "./Input";

const Default = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: "medium",
    },
    placeholder: { name: "string", defaultValue: "Enter a name" },
    disabled: { type: "boolean" },
  },
};

export default Default;

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <Input
      {...args}
      placeholder={args.placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Primary = Template.bind({});
