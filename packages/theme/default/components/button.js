const baseStyle = {
  padding: "10px 28px",
  borderRadius: "4px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "none",
  transition: "transform 0.1s ease 0s,background-color 0.3s ease 0s",
  fontSize: "14px",
  "&:active": {
    transform: "scale(0.97)",
  },
};

const intent = {
  default: {
    backgroundColor: "$colors.blue400",
    color: "$colors.white",
    borderColor: "$colors.blue400",

    "&:hover": {
      backgroundColor: "$colors.blue500",
      color: "$colors.white",
      borderColor: "$colors.blue500",
    },
  },
};

const index = { baseStyle, intent };

export default index;
