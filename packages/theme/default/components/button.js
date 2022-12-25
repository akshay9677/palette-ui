const baseStyle = {
  borderRadius: "6px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "none",
  border: "solid 1px",
  transition: "transform 0.1s ease 0s,background-color 0.3s ease 0s",
  "&:active": {
    transform: "scale(0.97)",
  },
};

const appearanceIntent = {
  "info-primary": {
    backgroundColor: "$colors.blue400",
    color: "$colors.white",
    borderColor: "$colors.blue400",
    "&:hover": {
      backgroundColor: "$colors.blue500",
      borderColor: "$colors.blue500",
    },
  },
  "success-primary": {
    backgroundColor: "$colors.green400",
    color: "$colors.white",
    borderColor: "$colors.green400",
    "&:hover": {
      backgroundColor: "$colors.green500",
      borderColor: "$colors.green500",
    },
  },
  "danger-primary": {
    backgroundColor: "$colors.red400",
    color: "$colors.white",
    borderColor: "$colors.red400",
    "&:hover": {
      backgroundColor: "$colors.red500",
      borderColor: "$colors.red500",
    },
  },
  "info-secondary": {
    backgroundColor: "transparent",
    color: "$colors.blue400",
    borderColor: "$colors.blue400",
    "&:hover": {
      backgroundColor: "$colors.blue100",
      color: "$colors.blue500",
      borderColor: "$colors.blue500",
    },
  },
  "success-secondary": {
    backgroundColor: "transparent",
    color: "$colors.green400",
    borderColor: "$colors.green400",
    "&:hover": {
      backgroundColor: "$colors.green100",
      color: "$colors.green500",
      borderColor: "$colors.green500",
    },
  },
  "danger-secondary": {
    backgroundColor: "transparent",
    color: "$colors.red400",
    borderColor: "$colors.red400",
    "&:hover": {
      backgroundColor: "$colors.red100",
      color: "$colors.red500",
      borderColor: "$colors.red500",
    },
  },
};

const size = {
  small: {
    padding: "6px 20px",
    fontSize: "12px",
    borderRadius: "4px",
  },
  medium: {
    padding: "10px 28px",
    fontSize: "14px",
  },
  large: {
    padding: "14px 32px",
    fontSize: "16px",
  },
};

const rounded = {
  true: {
    borderRadius: "20px",
  },
};

const index = { baseStyle, appearanceIntent, size, rounded };

export default index;
