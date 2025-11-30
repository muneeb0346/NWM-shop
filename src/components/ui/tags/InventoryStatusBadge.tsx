import styles from "./InventoryStatusBadge.module.css";

type InventoryStatusVariant = "good" | "okay" | "low" | "out";

interface InventoryStatusBadgeProps {
    variant: InventoryStatusVariant;
    text: string;
}

export default function InventoryStatusBadge({ variant, text }: InventoryStatusBadgeProps) {
    return (
        <div className={`${styles.badge} ${styles[variant]}`}>
            <span className="text-10-700-140">{text}</span>
        </div>
    );
}
