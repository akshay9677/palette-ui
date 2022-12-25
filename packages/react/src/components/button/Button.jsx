import React, { useState, useEffect } from "react";
import { getComponentTheme } from "../theme/theme-utils";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Button = (props = {}) => {
  const [styles, setStyles] = useState({});
  const appearanceIntent = `${props.intent}-${props.appearance}`;
  useEffect(() => {
    setStyles(
      getComponentTheme({
        name: "Button",
        props: { ...props, appearanceIntent },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  const Element = styled("button")`
    ${styles}
  `;
  return <Element>{props.children}</Element>;
};

Button.propTypes = {
  appearance: PropTypes.oneOf(["primary", "secondary"]),
  intent: PropTypes.oneOf(["info", "success", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  appearance: "primary",
  intent: "info",
  size: "medium",
  rounded: false,
};

export default Button;
