import styled from "@emotion/styled";
import { AliasToken } from "antd/es/theme/internal";
import { Text } from "../typography";

export const StyledLabel = styled.label<{ token: AliasToken }>`
    display: block;
    font-size: ${({ token }) => token.fontSize}px;
    line-height: ${({ token }) => token.lineHeightSM};
    font-weight: 500;
    margin-bottom: 6px;
    font-family: ${({ token }) => token.fontFamily};
`;

export const StyledCaption = styled(Text)`
    display: block;
    margin-top: 6px;
`;
