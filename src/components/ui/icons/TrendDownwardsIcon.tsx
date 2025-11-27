import React from "react";
import styles from "./Icon.module.css";

interface TrendDownwardsIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function TrendDownwardsIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 16,
    height = 16,
    className,
    style
}: TrendDownwardsIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <rect
                width="16"
                height="16"
                rx="4"
                fill={bgColor}
                className={styles.transition}
            />
            <path
                d="M0.75 0.75L5.25 5.25L8.10745 2.39255C9.46443 3.42772 10.5021 4.90332 10.978 6.67942L11.4956 8.61127M11.4956 8.61127L13.6169 4.93704M11.4956 8.61127L7.82136 6.48995"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}