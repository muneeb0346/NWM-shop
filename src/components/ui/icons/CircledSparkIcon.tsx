import React from "react";
import styles from "./Icon.module.css";

interface CircledSparkIconProps {
    iconColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function CircledSparkIcon({
    iconColor = "var(--text-primary)",
    width = 24,
    height = 24,
    className = "",
    style
}: CircledSparkIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.icon} ${styles["icon-24"]} ${className}`}
            style={style}
        >
            <path
                d="M15 9L16 8"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M8 16L9 15"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M15 15L16 16"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M8 8L9 9"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}