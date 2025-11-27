import React from "react";
import styles from "./Icon.module.css";

interface CircledPlusIconProps {
    iconColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function CircledPlusIcon({
    iconColor = "var(--text-primary)",
    width = 24,
    height = 24,
    className,
    style
}: CircledPlusIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <path
                d="M12 8V16"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M16 12H8"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}
