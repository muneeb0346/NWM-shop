import styles from "./TrendTag.module.css";
import TrendUpwardsIcon from "@components/ui/icons/TrendUpwardsIcon";
import TrendDownwardsIcon from "@components/ui/icons/TrendDownwardsIcon";

interface TrendTagProps {
    variant?: "upwards" | "downwards";
    text: string;
    isHovered?: boolean;
}

export default function TrendTag({ variant = "upwards", text, isHovered = false }: TrendTagProps) {
    const Icon = variant === "upwards" ? TrendUpwardsIcon : TrendDownwardsIcon;
    const iconColor = isHovered ? "var(--icon-primary-bold)" : undefined;

    return (
        <div className={`${styles["trend-tag"]} ${variant === "downwards" ? styles.downwards : ""} ${isHovered ? styles.hovered : ""}`}>
            <Icon width={16} height={16} iconColor={iconColor} />
            <span className="text-12-500-140">{text}</span>
        </div>
    );
}