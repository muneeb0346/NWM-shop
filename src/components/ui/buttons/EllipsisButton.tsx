"use client";
import styles from "./EllipsisButton.module.css";
import ThreeDotsIcon from "@components/ui/icons/ThreeDotsIcon";

export default function EllipsisButton({ onClick }: { onClick?: () => void }) {
    return (
        <button type="button" className={styles.button} onClick={onClick} aria-label="More actions">
            <ThreeDotsIcon width={16} height={16} />
        </button>
    );
}
