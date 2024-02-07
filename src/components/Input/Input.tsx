import React from "react";
import "./Input.scss";
import { Input, InputProps } from "antd";

export interface InputTextProps extends InputProps {
  /**
   *
   */
}

const InputText = (props: InputTextProps) => {
  return <Input type="text" {...props} />;
};

export default InputText;
