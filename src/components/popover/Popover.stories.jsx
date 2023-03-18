import React from "react";

import Popover from "./Popover";
import Button from "../button/Button";

const Default = {
  title: "Components/Popover",
  component: Popover,
  argTypes: {
    contentWidth: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    placement: {
      options: [
        "auto-end",
        "auto-start",
        "auto",
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
      control: { type: "radio" },
      defaultValue: "bottom",
    },
  },
};

export default Default;

const Template = (args) => {
  return (
    <Popover {...args} content={() => <div className="p-2">Hello Popup</div>}>
      <Button>Click Me</Button>
    </Popover>
  );
};

export const Primary = Template.bind({});
