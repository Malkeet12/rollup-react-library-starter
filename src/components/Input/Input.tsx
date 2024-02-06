import React, { forwardRef } from "react";
import { Input as AntdInput, InputRef, theme } from "antd";
import { StyledCaption, StyledLabel } from "./input.styles";
import { InputProps } from "./input.types";

const helperTextMap = {
  "": undefined,
  error: "danger",
};

const Input = ({ label, helperText, status = "", ...rest }: InputProps) => {
  const { token } = theme.useToken();

  return (
    <>
      {label && <StyledLabel token={token}>{label}</StyledLabel>}

      <AntdInput status={status} {...rest} />

      {helperText && (
        <StyledCaption caption type={helperTextMap[status] || status}>
          {helperText}
        </StyledCaption>
      )}
    </>
  );
};

Input.displayName = "Input";
export default Input;
