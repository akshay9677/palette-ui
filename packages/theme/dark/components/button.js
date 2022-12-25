import button from "../../default/components/button";

let { appearanceIntent: appInt } = button || {};

const appearanceIntent = {
  "info-primary": {
    ...appInt["info-primary"],
    color: "$colors.black",
  },
  "success-primary": {
    ...appInt["success-primary"],
    color: "$colors.black",
  },
  "danger-primary": {
    ...appInt["danger-primary"],
    color: "$colors.black",
  },
  "info-secondary": {
    ...appInt["info-secondary"],
    "&:hover": {
      backgroundColor: "$colors.blue700",
    },
  },
  "success-secondary": {
    ...appInt["success-secondary"],

    "&:hover": {
      backgroundColor: "$colors.green700",
    },
  },
  "danger-secondary": {
    ...appInt["danger-secondary"],
    "&:hover": {
      backgroundColor: "$colors.red700",
    },
  },
};

export default { ...button, appearanceIntent };
