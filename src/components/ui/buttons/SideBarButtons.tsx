"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@contexts/SideBarContext";
import styles from "./SideBarButtons.module.css";
import React from "react";

interface SideBarButtonProps {
    href: string;
    icon: React.ComponentType<{
        iconColor?: string;
        bgColor?: string;
        width?: number | string;
        height?: number | string;
        className?: string;
    }>;
    text: string;
    iconColor?: string;
    bgColor?: string;
    activeIconColor?: string;
    activeBgColor?: string;
}

export default function SideBarButton({
    href,
    icon: Icon,
    text,
    iconColor,
    bgColor,
    activeIconColor = "var(--icon-white)",
    activeBgColor = "var(--bg-primary-normal)"
}: SideBarButtonProps) {
    const pathname = usePathname();
    const { isOpen } = useSidebar();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${styles.button} ${!isOpen ? styles.collapsed : ""}`}
        >
            <Icon
                iconColor={isActive ? activeIconColor : iconColor}
                bgColor={isActive ? activeBgColor : bgColor}
                className={styles.icon}
            />
            {isOpen && (
                <span className={`text-18-500-130 ${styles.text}`}>{text}</span>
            )}
        </Link>
    );
}