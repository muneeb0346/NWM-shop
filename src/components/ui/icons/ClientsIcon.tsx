import React from "react";
import styles from "./Icon.module.css"

interface ClientsIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function ClientsIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className = "",
    style
}: ClientsIconProps) {
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
                d="M25 29.1276C25.8329 29.37 26.7138 29.5 27.625 29.5C29.1037 29.5 30.5025 29.1576 31.7464 28.5478C31.7488 28.4905 31.75 28.4329 31.75 28.375C31.75 26.0968 29.9031 24.25 27.625 24.25C26.2069 24.25 24.956 24.9655 24.2136 26.0552M25 29.1276V29.125C25 28.0121 24.7148 26.9658 24.2136 26.0552M25 29.1276C25 29.1632 24.9997 29.1988 24.9991 29.2343C23.1374 30.3552 20.9565 31 18.625 31C16.2935 31 14.1126 30.3552 12.2509 29.2343C12.2503 29.198 12.25 29.1615 12.25 29.125C12.25 25.6042 15.1042 22.75 18.625 22.75C21.0329 22.75 23.129 24.085 24.2136 26.0552M22 16.375C22 18.239 20.489 19.75 18.625 19.75C16.761 19.75 15.25 18.239 15.25 16.375C15.25 14.511 16.761 13 18.625 13C20.489 13 22 14.511 22 16.375ZM30.25 18.625C30.25 20.0747 29.0747 21.25 27.625 21.25C26.1753 21.25 25 20.0747 25 18.625C25 17.1753 26.1753 16 27.625 16C29.0747 16 30.25 17.1753 30.25 18.625Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}