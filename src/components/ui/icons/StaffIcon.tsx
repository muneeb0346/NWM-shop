import React from 'react';
import styles from './Icon.module.css';

interface StaffIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function StaffIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className,
    style
}: StaffIconProps) {
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
            <circle
                cx="16.998"
                cy="15.2472"
                r="2.25094"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9972 26.0016V30.0033C14.9972 30.5555 15.4454 31.0037 15.9976 31.0037H17.9985C18.5507 31.0037 18.9989 30.5555 18.9989 30.0033V26.0016L20.0543 25.2984C20.3324 25.1133 20.4995 24.8001 20.4995 24.466V20.9996C20.4995 20.4473 20.0513 19.9991 19.4991 19.9991H14.497C13.9448 19.9991 13.4966 20.4473 13.4966 20.9996V24.466C13.4966 24.8001 13.6637 25.1133 13.9418 25.2984L14.9972 26.0016Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M25.0014 12.9962V18.4985"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M28.0026 12.9962V18.4985"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M31.0039 12.9962V18.4985"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}