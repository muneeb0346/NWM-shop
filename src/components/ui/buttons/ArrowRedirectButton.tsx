"use client";

import styles from "./ArrowRedirectButton.module.css";
import ArrowTopRightIcon from "@components/ui/icons/ArrowTopRightIcon";

interface ArrowRedirectButtonProps {
    href: string;
    ariaLabel?: string;
}

export default function ArrowRedirectButton({ href, ariaLabel = "Open full appointments view" }: ArrowRedirectButtonProps) {
    return (
        <a href={href} className={styles.button} aria-label={ariaLabel}>
            <ArrowTopRightIcon width={20} height={20} />
        </a>
    );
}
