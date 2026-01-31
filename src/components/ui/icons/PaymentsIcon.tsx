import React from "react";
import styles from "./Icon.module.css"

interface PaymentsIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function PaymentsIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className = "",
    style
}: PaymentsIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.icon} ${styles["icon-44"]} ${className}`}
            style={style}
        >
            <rect
                width="44"
                height="44"
                rx="22"
                fill={bgColor}
                className={styles.transition}
            />
            <path
                d="M27 31.25H17C13.35 31.25 11.25 29.15 11.25 25.5V18.5C11.25 14.85 13.35 12.75 17 12.75H27C30.65 12.75 32.75 14.85 32.75 18.5V25.5C32.75 29.15 30.65 31.25 27 31.25ZM17 14.25C14.14 14.25 12.75 15.64 12.75 18.5V25.5C12.75 28.36 14.14 29.75 17 29.75H27C29.86 29.75 31.25 28.36 31.25 25.5V18.5C31.25 15.64 29.86 14.25 27 14.25H17Z"
                fill={iconColor}
                className={styles.transition}
            />
            <path
                d="M22 25.75C19.93 25.75 18.25 24.07 18.25 22C18.25 19.93 19.93 18.25 22 18.25C24.07 18.25 25.75 19.93 25.75 22C25.75 24.07 24.07 25.75 22 25.75ZM22 19.75C20.76 19.75 19.75 20.76 19.75 22C19.75 23.24 20.76 24.25 22 24.25C23.24 24.25 24.25 23.24 24.25 22C24.25 20.76 23.24 19.75 22 19.75Z"
                fill={iconColor}
                className={styles.transition}
            />
            <path
                d="M29 17.75H26C25.59 17.75 25.25 17.41 25.25 17C25.25 16.59 25.59 16.25 26 16.25H29C29.41 16.25 29.75 16.59 29.75 17C29.75 17.41 29.41 17.75 29 17.75Z"
                fill={iconColor}
                className={styles.transition}
            />
            <path
                d="M18 27.75H15C14.59 27.75 14.25 27.41 14.25 27C14.25 26.59 14.59 26.25 15 26.25H18C18.41 26.25 18.75 26.59 18.75 27C18.75 27.41 18.41 27.75 18 27.75Z"
                fill={iconColor}
                className={styles.transition}
            />
        </svg>
    );
}