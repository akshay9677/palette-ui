const baseStyle = {
  width: "100%",
  border: "solid 1px",
  borderColor: "$colors.gray300",
  borderRadius: "6px",
  padding: "8px 12px",
  backgroundColor: "$colors.white",
  fontFamily: "Helvetica Neue",

  "-webkit-transition-property": "border-color, box-shadow, text",
  "-webkit-transition-duration": "0.2s, 0.2s",
  "&:hover": {
    borderColor: "$colors.blue200",
  },
  "&:focus-visible": {
    borderColor: "$colors.blue200",
    outlineWidth: "0px",
    "--box-shadow-color": "#1e56e724",
    boxShadow: "0 0 0 2px var(--box-shadow-color)",
  },
  "&::placeholder": {
    color: "$colors.gray400",
  },

  "&[disabled]": {
    background: "$colors.gray100",
    cursor: "not-allowed",
    "&:hover": {
      borderColor: "$colors.gray300",
    },
  },
};

const size = {
  small: {
    padding: "6px 8px",
    fontSize: "12px",
  },
  medium: {
    padding: "8px 12px",
    fontSize: "14px",
  },
  large: {
    padding: "12px 14px",
    fontSize: "16px",
  },
};

export default { baseStyle, size };
