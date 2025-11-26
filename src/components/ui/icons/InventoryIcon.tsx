import React from 'react';
import styles from './Icon.module.css'

interface InventoryIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function InventoryIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className,
    style
}: InventoryIconProps) {
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
                d="M21.1243 22.005H25.3003"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M21.1243 25.9949L27.1243 25.9999"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <rect
                x="13.0007"
                y="13"
                width="18"
                height="18"
                rx="2"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M21.1243 17.9949H27.1243"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M17.1234 17.7501C16.9854 17.7507 16.8739 17.8629 16.8742 18.0009C16.8746 18.1389 16.9867 18.2505 17.1247 18.2503C17.2627 18.2501 17.3745 18.1382 17.3745 18.0002C17.3747 17.9336 17.3483 17.8697 17.3011 17.8227C17.254 17.7757 17.1899 17.7496 17.1234 17.7501"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M17.1234 21.7502C16.9854 21.7508 16.8739 21.863 16.8742 22.001C16.8746 22.139 16.9867 22.2506 17.1247 22.2504C17.2627 22.2503 17.3745 22.1383 17.3745 22.0003C17.3747 21.9337 17.3483 21.8698 17.3011 21.8228C17.254 21.7758 17.1899 21.7497 17.1234 21.7502"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M17.1234 25.75C16.9854 25.7505 16.8739 25.8628 16.8742 26.0008C16.8746 26.1388 16.9867 26.2504 17.1247 26.2502C17.2627 26.25 17.3745 26.1381 17.3745 26.0001C17.3747 25.9335 17.3483 25.8696 17.3011 25.8226C17.254 25.7756 17.1899 25.7495 17.1234 25.75"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}