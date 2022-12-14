import { getComponentTheme } from "../theme/theme-utils";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Input = (props = {}) => {
  const [styles, setStyles] = useState({});
  useEffect(() => {
    setStyles(
      getComponentTheme({
        name: "Input",
        props: { ...props },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  const Element = styled("input")`
    ${styles}
  `;
  return (
    <Element
      placeholder={(props || {}).placeholder}
      disabled={(props || {}).disabled}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Input.defaultProps = {
  placeholder: "",
  disabled: false,
  size: "medium",
};

export default Input;
