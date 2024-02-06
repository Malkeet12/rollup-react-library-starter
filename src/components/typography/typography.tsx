import React, { forwardRef } from "react";
import { Typography as AntDTypography, theme } from "antd";
import { LinkProps as AntDLinkProps } from "antd/es/typography/Link";
import { TextProps as AntDTextProps } from "antd/es/typography/Text";
const { useToken } = theme;

const { Text: AntDText, Link: AntDLink, Title } = AntDTypography;

export interface TextProps extends AntDTextProps {
    caption?: boolean;
}

export interface LinkProps extends AntDLinkProps {
    caption?: boolean;
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
    ({ children, caption, type, style = {}, ...rest }, ref) => {
        const { token } = useToken();

        // TODO: remove inline style
        if (caption)
            return (
                <AntDText
                    type={type || "secondary"}
                    style={{ ...style, fontSize: `${token.fontSizeSM}px` }}
                    ref={ref}
                    {...rest}
                >
                    {children}
                </AntDText>
            );
        return (
            <AntDText type={type} style={style} ref={ref} {...rest}>
                {children}
            </AntDText>
        );
    }
);

Text.displayName = "Text";

const Link = forwardRef<HTMLElement, LinkProps>(
    ({ children, caption, type, style = {}, ...rest }, ref) => {
        const { token } = useToken();
        if (caption)
            return (
                <AntDLink
                    type={type || "secondary"}
                    style={{ ...style, fontSize: `${token.fontSizeSM}px` }}
                    ref={ref}
                    {...rest}
                >
                    {children}
                </AntDLink>
            );
        return (
            <AntDLink type={type} style={style} ref={ref} {...rest}>
                {children}
            </AntDLink>
        );
    }
);

const Link2 = forwardRef<HTMLElement, LinkProps>(
    ({ children, style = {}, ...rest }, ref) => {
        const { token } = useToken();
        return (
            <AntDLink
                style={{ ...style, fontSize: `${token.fontSizeSM}px` }}
                ref={ref}
                {...rest}
            >
                {children}
            </AntDLink>
        );
    }
);

Link2.displayName = "Link2";

Link.displayName = "Link";

export { Text, Link, Title };

const Typography = { Text, Link, Title };
export default Typography;
