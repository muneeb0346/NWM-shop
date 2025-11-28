import styles from "./ChartTooltip.module.css";

interface ChartTooltipProps {
    active?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any[];
    label?: string;
    valueLabel?: string;
}

export default function ChartTooltip({ active, payload, label, valueLabel = "Value" }: ChartTooltipProps) {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p className="text-10-400-120">{valueLabel}</p>
                <p className="text-12-600-140">{payload[0].value}</p>
            </div>
        );
    }
    return null;
}
