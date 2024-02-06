import { InputProps as antdInputProps } from "antd";

export interface InputProps extends antdInputProps {
    label?: string;
    helperText?: string;
}
