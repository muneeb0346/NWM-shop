import React from "react";
import styles from "./Icon.module.css";

interface BookingsIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function BookingsIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className,
    style
}: BookingsIconProps) {
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
                d="M20.3404 25.8398C19.6515 25.7803 18.9543 25.75 18.25 25.75H17.5C15.0147 25.75 13 23.7353 13 21.25C13 18.7647 15.0147 16.75 17.5 16.75H18.25C18.9543 16.75 19.6515 16.7197 20.3404 16.6602M20.3404 25.8398C20.5933 26.8015 20.9237 27.7317 21.3246 28.6234C21.5721 29.1738 21.3842 29.8328 20.8616 30.1345L20.2053 30.5134C19.6539 30.8318 18.9456 30.6306 18.6784 30.0527C18.0518 28.6973 17.5654 27.2639 17.2379 25.771M20.3404 25.8398C19.9552 24.3745 19.75 22.8362 19.75 21.25C19.75 19.6638 19.9552 18.1255 20.3404 16.6602M20.3404 25.8398C23.5 26.1124 26.4845 26.9972 29.1747 28.3749M20.3404 16.6602C23.5 16.3876 26.4845 15.5028 29.1747 14.1251M29.1747 14.1251C29.057 13.7459 28.9302 13.3708 28.7944 13M29.1747 14.1251C29.7097 15.8483 30.0557 17.6546 30.1886 19.5199M29.1747 28.3749C29.057 28.7541 28.9302 29.1292 28.7944 29.5M29.1747 28.3749C29.7097 26.6517 30.0557 24.8454 30.1886 22.9801M30.1886 19.5199C30.6844 19.9326 31 20.5545 31 21.25C31 21.9455 30.6844 22.5674 30.1886 22.9801M30.1886 19.5199C30.2293 20.0913 30.25 20.6682 30.25 21.25C30.25 21.8318 30.2293 22.4087 30.1886 22.9801"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}