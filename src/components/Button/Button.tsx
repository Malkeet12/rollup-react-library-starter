import React from "react";
import "./Button.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

const Button = ({ label, ...others }: ButtonProps) => {
  return <button {...others}>{label}</button>;
};

export default Button;
// import React from "react";
// import "./Button.scss";
// import { Button as AntdButton, ButtonProps } from "antd";

// // export interface ButtonProps
// //   extends React.DetailedHTMLProps<
// //     React.ButtonHTMLAttributes<HTMLButtonElement>,
// //     HTMLButtonElement
// //   > {
// //   label: string;
// // }

// const Button = ({ ...others }: ButtonProps) => {
//   return <AntdButton {...others}></AntdButton>;
// };

// export default Button;
