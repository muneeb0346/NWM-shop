import React from "react";
import styles from "./Icon.module.css"

interface AddFriendIconProps {
    iconColor?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export default function AddFriendIcon({
    iconColor = "var(--text-primary)",
    width = 20,
    height = 20,
    className = "",
    style
}: AddFriendIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.icon} ${styles["icon-20"]} ${className}`}
            style={style}
        >
            <path
                d="M20.0032 15.0013V6.998C20.0032 4.78808 18.2114 2.99634 16.0015 2.99634H6.99776C4.78784 2.99634 2.99609 4.78808 2.99609 6.998V16.0018C2.99609 18.2117 4.78784 20.0034 6.99776 20.0034H15.0011"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M12.7569 7.68223C13.6363 8.5616 13.6363 9.98619 12.7569 10.8656C11.8775 11.7449 10.453 11.7449 9.57359 10.8656C8.69422 9.98619 8.69422 8.5616 9.57359 7.68223C10.453 6.80286 11.8775 6.80286 12.7569 7.68223"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M14.001 14.4712C13.5908 14.2471 13.1236 14.114 12.6224 14.114H9.70918C8.46366 14.114 7.41222 14.9013 6.99805 16.0018"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M19.0036 17.0061V21.0005"
                stroke={iconColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M21.0002 19.0023H17.0059"
                stroke={iconColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
            <path
                d="M19.0036 15.0012C21.2135 15.0012 23.0053 16.793 23.0053 19.0029C23.0053 21.2128 21.2135 23.0046 19.0036 23.0046C16.7937 23.0046 15.002 21.2128 15.002 19.0029C15.002 16.793 16.7937 15.0012 19.0036 15.0012"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.transition}
            />
        </svg>
    );
}
