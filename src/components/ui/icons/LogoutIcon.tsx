import React from "react";
import styles from "./Icon.module.css"

interface LogoutIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function LogoutIcon({
    iconColor = "var(--button-danger-hover)",
    bgColor = "var(--button-danger)",
    width = 44,
    height = 44,
    className = "",
    style
}: LogoutIconProps) {
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
                rx="26"
                fill={bgColor}
                className={styles.transition}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12.25C16.6152 12.25 12.25 16.6152 12.25 22C12.25 27.3848 16.6152 31.75 22 31.75C27.3848 31.75 31.75 27.3848 31.75 22C31.75 16.6152 27.3848 12.25 22 12.25ZM17.7197 21.4697C17.579 21.6103 17.5 21.8011 17.5 22C17.5 22.1989 17.579 22.3897 17.7197 22.5303L20.7197 25.5303C21.0126 25.8232 21.4874 25.8232 21.7803 25.5303C22.0732 25.2374 22.0732 24.7626 21.7803 24.4697L20.0607 22.75H25.75C26.1642 22.75 26.5 22.4142 26.5 22C26.5 21.5858 26.1642 21.25 25.75 21.25L20.0607 21.25L21.7803 19.5303C22.0732 19.2374 22.0732 18.7626 21.7803 18.4697C21.4874 18.1768 21.0126 18.1768 20.7197 18.4697L17.7197 21.4697Z"
                fill={iconColor}
                className={styles.transition}
            />
        </svg>
    );
}
