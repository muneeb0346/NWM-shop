import React from "react";
import styles from "./Icon.module.css";

interface PlusIconProps {
    iconColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function PlusIcon({
    iconColor = "var(--text-primary)",
    width = 20,
    height = 20,
    className,
    style
}: PlusIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <path
                d="M10 4.16669V15.8334M4.16669 10H15.8334"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                className={styles.transition}
            />
        </svg>
    );
}