"use client";

import { useState, type ComponentType } from "react";
import styles from "./DashboardCard.module.css";
import TrendTag from "@components/ui/tags/TrendTag";
import Image from "next/image";

interface DashboardCardProps {
    Icon: ComponentType<{
        iconColor?: string;
        width?: number | string;
        height?: number | string;
        className?: string;
        style?: React.CSSProperties;
    }>;
    heading: string;
    valueText: string;
    trendText: string;
    trendDirection?: "upwards" | "downwards";
    trendContextText: string;
}

export default function DashboardCard({
    Icon,
    heading,
    valueText,
    trendText,
    trendDirection = "upwards",
    trendContextText,
}: DashboardCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.header}>
                <div className={styles["icon-wrapper"]}>
                    <Icon
                        width={24}
                        height={24}
                        iconColor={isHovered ? "var(--icon-primary-bold)" : undefined}
                    />
                </div>
                <h4 className={`head-20-600-130 ${styles.heading}`}>
                    {heading}
                </h4>
            </div>
            <p className={`head-40-600-120 ${styles.text}`}>
                {valueText}
            </p>
            <div className={styles["trend-info"]}>
                <TrendTag text={trendText} variant={trendDirection} isHovered={isHovered} />
                <div className={`text-14-500-150 ${styles["trend-text"]}`}>
                    {trendContextText}
                </div>
            </div>
            <Image src="/images/dashboard-cards-element.png" alt="" width={57} height={56} className={styles["card-element"]} />
        </div>
    );
}
