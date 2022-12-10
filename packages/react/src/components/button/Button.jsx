import React, { useState, useEffect } from "react";
import { getComponentTheme } from "../theme/theme-utils";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Button = (props) => {
  const [styles, setStyles] = useState({});
  useEffect(() => {
    setStyles(getComponentTheme({ name: "Button", props }));
  }, []);
  const Element = styled("button")`
    ${styles}
  `;
  return <Element>{props.children}</Element>;
};

Button.propTypes = {
  intent: PropTypes.oneOf(["default", "danger", "success"]),
};

Button.defaultProps = {
  intent: "default",
};

export default Button;
