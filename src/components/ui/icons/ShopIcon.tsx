import React from "react";
import styles from "./Icon.module.css";

interface ShopIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function ShopIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className = "",
    style
}: ShopIconProps) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9966 13.9966H24.0008C24.5533 13.9966 25.0012 14.4445 25.0012 14.9971V30.0033H13.9966C13.4441 30.0033 12.9962 29.5554 12.9962 29.0029V14.9971C12.9962 14.4445 13.4441 13.9966 13.9966 13.9966Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.0012 17.9984H30.0033C30.5558 17.9984 31.0037 18.4463 31.0037 18.9988V29.0029C31.0037 29.5555 30.5558 30.0034 30.0033 30.0034H25.0012V17.9984Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M16.9979 17.8733C16.9288 17.8733 16.8728 17.9293 16.8728 17.9983C16.8728 18.0674 16.9288 18.1234 16.9979 18.1234C17.067 18.1234 17.1229 18.0674 17.1229 17.9983C17.1229 17.9293 17.067 17.8733 16.9979 17.8733"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M20.9996 17.8733C20.9305 17.8733 20.8745 17.9293 20.8745 17.9983C20.8745 18.0674 20.9305 18.1234 20.9996 18.1234C21.0687 18.1234 21.1247 18.0674 21.1247 17.9983C21.1247 17.9293 21.0687 17.8733 20.9996 17.8733"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M16.9979 21.8749C16.9288 21.8749 16.8728 21.9309 16.8728 22C16.8728 22.069 16.9288 22.125 16.9979 22.125C17.067 22.125 17.1229 22.069 17.1229 22C17.1229 21.9309 17.067 21.8749 16.9979 21.8749"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M20.9996 21.8749C20.9305 21.8749 20.8745 21.9309 20.8745 22C20.8745 22.069 20.9305 22.125 20.9996 22.125C21.0687 22.125 21.1247 22.069 21.1247 22C21.1247 21.9309 21.0687 21.8749 20.9996 21.8749"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M16.9979 25.8766C16.9288 25.8766 16.8728 25.9326 16.8728 26.0017C16.8728 26.0707 16.9288 26.1267 16.9979 26.1267C17.067 26.1267 17.1229 26.0707 17.1229 26.0017C17.1229 25.9326 17.067 25.8766 16.9979 25.8766"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M20.9996 25.8766C20.9305 25.8766 20.8745 25.9326 20.8745 26.0017C20.8745 26.0707 20.9305 26.1267 20.9996 26.1267C21.0687 26.1267 21.1247 26.0707 21.1247 26.0017C21.1247 25.9326 21.0687 25.8766 20.9996 25.8766"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M28.0025 21.8749C27.9335 21.8749 27.8775 21.9309 27.8775 22C27.8775 22.069 27.9335 22.125 28.0025 22.125C28.0716 22.125 28.1276 22.069 28.1276 22C28.1276 21.9309 28.0716 21.8749 28.0025 21.8749"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M28.0025 25.8766C27.9335 25.8766 27.8775 25.9326 27.8775 26.0017C27.8775 26.0707 27.9335 26.1267 28.0025 26.1267C28.0716 26.1267 28.1276 26.0707 28.1276 26.0017C28.1276 25.9326 28.0716 25.8766 28.0025 25.8766"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}