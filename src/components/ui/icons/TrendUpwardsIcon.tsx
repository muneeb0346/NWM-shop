import React from "react";
import styles from "./Icon.module.css";

interface TrendUpwardsIconProps {
    iconColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function TrendUpwardsIcon({
    iconColor = "var(--icon-success-bold)",
    width = 16,
    height = 16,
    className = "",
    style
}: TrendUpwardsIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.icon} ${styles["icon-16"]} ${className}`}
            style={style}
        >
            <path
                d="M1.5 12L6 7.49999L8.87095 10.3709C9.67341 8.79207 11.0028 7.46819 12.7468 6.69169L14.5739 5.87821M14.5739 5.87821L10.6131 4.35779M14.5739 5.87821L13.0535 9.83906"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}