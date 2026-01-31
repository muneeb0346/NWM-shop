import React from "react";
import styles from "./Icon.module.css";

interface TrendDownwardsIconProps {
    iconColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function TrendDownwardsIcon({
    iconColor = "var(--icon-warning-bold)",
    width = 16,
    height = 16,
    className = "",
    style
}: TrendDownwardsIconProps) {
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
                d="M1.5 4L6 8.5L8.85745 5.64255C10.2144 6.67772 11.2521 8.15332 11.728 9.92942L12.2456 11.8613M12.2456 11.8613L14.3669 8.18704M12.2456 11.8613L8.57136 9.73995"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}