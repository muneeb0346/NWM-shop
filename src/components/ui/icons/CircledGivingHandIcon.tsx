import React from "react";
import styles from "./Icon.module.css";

interface CircledGivingHandIconProps {
    iconColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function CircledGivingHandIcon({
    iconColor = "var(--text-primary)",
    width = 24,
    height = 24,
    className = "",
    style
}: CircledGivingHandIconProps) {
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
                d="M7 15L8.156 15.578C8.71125 15.8556 9.32353 16.0001 9.94431 16H16.5C17.3284 16 18 15.3284 18 14.5V14.5C18 13.6716 17.3284 13 16.5 13H12.376"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M7.5 8H9.91335C10.3461 8 10.7672 8.14036 11.1133 8.4L13.3506 10.0779C13.7271 10.3603 13.9625 10.7921 13.9959 11.2615C14.0292 11.731 13.8573 12.1917 13.5245 12.5245V12.5245C12.9533 13.0958 12.0489 13.16 11.4026 12.6753L10 11.6233"
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