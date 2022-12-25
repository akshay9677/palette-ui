import { getComponentTheme } from "../theme/theme-utils";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TextArea = (props = {}) => {
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
  const Element = styled("textarea")`
    ${styles}
  `;
  return (
    <Element
      placeholder={(props || {}).placeholder}
      disabled={(props || {}).disabled}
      rows={(props || {}).rows}
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  placeholder: "",
  disabled: false,
  size: "medium",
  rows: 3,
};

export default TextArea;
