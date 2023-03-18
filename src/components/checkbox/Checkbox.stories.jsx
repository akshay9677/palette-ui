import React, { useEffect, useState } from "react";

import Checkbox from "./Checkbox";

const Default = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export default Default;

const Template = (args) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log(args.checked);
  }, [args]);
  return (
    <Checkbox {...args} checked={checked} onChange={(v) => setChecked(v)} />
  );
};

export const Primary = Template.bind({});
