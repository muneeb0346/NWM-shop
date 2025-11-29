import styles from "./StatusBadge.module.css";

type StatusVariant = "new" | "deposit-requested" | "deposit-paid" | "scheduled" | "upcoming";

interface StatusBadgeProps {
    variant: StatusVariant;
    text: string;
}

export default function StatusBadge({ variant, text }: StatusBadgeProps) {
    return (
        <div className={`${styles.badge} ${styles[variant]}`}>
            <span className="text-10-500-140">{text}</span>
        </div>
    );
}
