import React from 'react';

interface HelpIconProps {
    iconColor?: string;
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function HelpIcon({
    iconColor = "var(--text-primary)",
    bgColor = "transparent",
    width = 44,
    height = 44,
    className,
    style
}: HelpIconProps) {
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
                d="M19.8789 17.5188C21.0505 16.4937 22.95 16.4937 24.1215 17.5188C25.2931 18.544 25.2931 20.206 24.1215 21.2312C23.9176 21.4096 23.6917 21.5569 23.4513 21.6733C22.7056 22.0341 22.0002 22.6716 22.0002 23.5V24.25M31 22C31 26.9706 26.9706 31 22 31C17.0294 31 13 26.9706 13 22C13 17.0294 17.0294 13 22 13C26.9706 13 31 17.0294 31 22ZM22 27.25H22.0075V27.2575H22V27.25Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}