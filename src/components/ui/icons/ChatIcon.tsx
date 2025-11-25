import React from 'react';

interface ChatIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function ChatIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className,
    style
}: ChatIconProps) {
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
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.188 25L21.1 27.55C21.55 28.15 22.45 28.15 22.9 27.55L24.812 25H28C29.657 25 31 23.657 31 22V16C31 14.343 29.657 13 28 13H16C14.343 13 13 14.343 13 16V22C13 23.657 14.343 25 16 25H19.188Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 31H27"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22.177 19.323C22.275 19.421 22.275 19.579 22.177 19.677C22.079 19.775 21.921 19.775 21.823 19.677C21.725 19.579 21.725 19.421 21.823 19.323C21.921 19.225 22.079 19.226 22.177 19.323"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M26.177 19.323C26.275 19.421 26.275 19.579 26.177 19.677C26.079 19.775 25.921 19.775 25.823 19.677C25.725 19.579 25.725 19.421 25.823 19.323C25.921 19.225 26.079 19.226 26.177 19.323"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.177 19.323C18.275 19.421 18.275 19.579 18.177 19.677C18.079 19.775 17.921 19.775 17.823 19.677C17.725 19.579 17.725 19.421 17.823 19.323C17.921 19.225 18.079 19.226 18.177 19.323"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}