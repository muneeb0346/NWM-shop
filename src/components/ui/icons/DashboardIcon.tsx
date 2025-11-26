import React from 'react';
import styles from './Icon.module.css'

interface DashboardIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function DashboardIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className,
    style
}: DashboardIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 16C13 14.3431 14.3431 13 16 13H18.25C19.9069 13 21.25 14.3431 21.25 16V18.25C21.25 19.9069 19.9069 21.25 18.25 21.25H16C14.3431 21.25 13 19.9069 13 18.25V16ZM22.75 16C22.75 14.3431 24.0931 13 25.75 13H28C29.6569 13 31 14.3431 31 16V18.25C31 19.9069 29.6569 21.25 28 21.25H25.75C24.0931 21.25 22.75 19.9069 22.75 18.25V16ZM13 25.75C13 24.0931 14.3431 22.75 16 22.75H18.25C19.9069 22.75 21.25 24.0931 21.25 25.75V28C21.25 29.6569 19.9069 31 18.25 31H16C14.3431 31 13 29.6569 13 28V25.75ZM22.75 25.75C22.75 24.0931 24.0931 22.75 25.75 22.75H28C29.6569 22.75 31 24.0931 31 25.75V28C31 29.6569 29.6569 31 28 31H25.75C24.0931 31 22.75 29.6569 22.75 28V25.75Z"
                fill={iconColor}
                className={styles.transition}
            />
        </svg>
    );
}