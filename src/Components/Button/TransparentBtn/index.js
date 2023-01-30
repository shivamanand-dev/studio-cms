import React from "react";

import { StyledTransparentBtn } from "./StyledTransparentBtn";

const TransparentBtn = ({
  btnText = "btnText",
  customBtnClass = "btn",
  onClick,
  customStyle = {},
  btnVariant = "dark",
}) => {
  return (
    <StyledTransparentBtn style={customStyle} btnVariant={btnVariant}>
      <button className={customBtnClass} onClick={onClick}>
        {btnText}
      </button>
    </StyledTransparentBtn>
  );
};

export default TransparentBtn;
