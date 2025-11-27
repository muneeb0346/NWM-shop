import styles from "./DahsboardButton.module.css";
import React from "react";

interface DashboardButtonProps {
    icon?: React.ComponentType<{
        iconColor?: string;
        width?: number | string;
        height?: number | string;
        className?: string;
        style?: React.CSSProperties;
    }>;
    text: string;
    variant?: "default" | "theme";
    onClick?: () => void;
}

export default function DashboardButton({
    icon: Icon,
    text,
    variant = "default",
    onClick
}: DashboardButtonProps) {
    const iconColor = variant === "theme" ? "var(--bg-white)" : undefined;

    return (
        <button
            className={`${styles.button} ${variant === "theme" ? styles.theme : ""}`}
            onClick={onClick}
        >
            {Icon && <Icon iconColor={iconColor} />}
            <span>{text}</span>
        </button>
    );
}