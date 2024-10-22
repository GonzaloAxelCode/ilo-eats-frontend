import React from "react";

type SizeOptions = "13px" | "14px" | "16px" | "19px" | "24px" | "32px";

interface PProps {
    size?: SizeOptions;
    color?: string;
    children: React.ReactNode;
}

export default function P({ size = "13px", color = "#000", children, ...props }: PProps) {
    const textSizeClass: Record<SizeOptions, string> = {
        "13px": "text-xs",
        "14px": "text-sm",
        "16px": "text-base",
        "19px": "text-lg",
        "24px": "text-xl",
        "32px": "text-2xl",
    };

    const textColorStyle = { color };

    return (
        <p className={`${textSizeClass[size]}`} style={textColorStyle} {...props}>
            {children}
        </p>
    );
}
