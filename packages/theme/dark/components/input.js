import input from "../../default/components/input";

let { baseStyle: defaultBaseStyle } = input || {};

const baseStyle = {
  ...defaultBaseStyle,
  backgroundColor: "$colors.black100",
  borderColor: "$colors.gray800",
  color: "$colors.white",
  "&[disabled]": {
    background: "$colors.gray900",
    cursor: "not-allowed",
    "&:hover": {
      borderColor: "$colors.gray800",
    },
  },
};

export default { ...input, baseStyle };
