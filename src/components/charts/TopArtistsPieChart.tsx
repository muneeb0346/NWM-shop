"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import DateRangeButton from "@components/ui/buttons/DateRangeButton";
import { useTopArtists } from "@contexts/TopArtistsContext";
import styles from "./TopArtistsPieChart.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, percent, name, value, isMaxValue } = props;

    if (!cx || !cy || midAngle === undefined) {
        return null;
    }

    const RADIAN = Math.PI / 180;
    const radius = outerRadius ? outerRadius + 25 : 125;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const isLargeSlice = percent ? percent > 0.1 : false;
    const textColor = isMaxValue || isLargeSlice ? "var(--text-white)" : "var(--text-primary)";

    return (
        <g pointerEvents="none">
            <text
                x={x}
                y={y - 7}
                fill={textColor}
                textAnchor="middle"
                dominantBaseline="central"
                className={`text-12-400-133 ${styles["label-name"]}`}
            >
                {name || "N/A"}
            </text>
            <text
                x={x}
                y={y + 7}
                fill={textColor}
                textAnchor="middle"
                dominantBaseline="central"
                className={`text-10-400-120 ${styles["label-value"]}`}
            >
                {value || 0}
            </text>
        </g>
    );
};

export default function TopArtistsPieChart() {
    const { chartData, dateRangeLabel, startDate, endDate, minDate, maxDate, setSelectedRange } = useTopArtists();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const maxIndex = chartData.length
        ? chartData.reduce(
            (maxIdx, item, idx, arr) =>
                item.appointments > arr[maxIdx].appointments ? idx : maxIdx, 0
          )
        : -1;

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="heading-h6-600">Top Artists</h3>
                <DateRangeButton
                    placeholder={dateRangeLabel}
                    minDate={minDate}
                    maxDate={maxDate}
                    initialStartDate={startDate ? (() => {
                        const dd = String(startDate.getDate()).padStart(2, "0");
                        const mm = String(startDate.getMonth() + 1).padStart(2, "0");
                        const yyyy = startDate.getFullYear();
                        return `${dd}/${mm}/${yyyy}`;
                    })() : undefined}
                    initialEndDate={endDate ? (() => {
                        const dd = String(endDate.getDate()).padStart(2, "0");
                        const mm = String(endDate.getMonth() + 1).padStart(2, "0");
                        const yyyy = endDate.getFullYear();
                        return `${dd}/${mm}/${yyyy}`;
                    })() : undefined}
                    onChange={(startDate, endDate) => {
                        setSelectedRange(startDate, endDate);
                    }}
                />
            </div>
            <div className={styles["chart-container"]}>
                <div className={styles["chart-wrapper"]}>
                    {chartData.length === 0 && (
                        <div className={styles["empty-state"]}>
                            No data to display
                        </div>
                    )}
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <defs>
                                <linearGradient id="pieGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="18.27%" stopColor="var(--bg-primary-normal)" />
                                    <stop offset="98.68%" stopColor="var(--bg-pending-bold)" />
                                </linearGradient>
                            </defs>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                startAngle={90}
                                endAngle={-270}
                                labelLine={false}
                                label={(props) => (
                                    <CustomLabel
                                        {...props}
                                        isMaxValue={props.index === maxIndex}
                                    />
                                )}
                                outerRadius={85}
                                dataKey="appointments"
                                onMouseEnter={(_, index) => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onAnimationEnd={() => setHasAnimated(true)}
                                animationBegin={0}
                                animationDuration={800}
                                isAnimationActive={!hasAnimated}
                            >
                                {chartData.map((entry, index) => {
                                    const shouldShowGradient =
                                        hoveredIndex !== null
                                            ? hoveredIndex === index
                                            : index === maxIndex;

                                    return (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                shouldShowGradient
                                                    ? "url(#pieGradient)"
                                                    : "var(--bg-primary-pale)"
                                            }
                                            stroke={shouldShowGradient ? "none" : "var(--primary-1002)"}
                                            strokeWidth={shouldShowGradient ? 0 : 0.72}
                                            className={styles["pie-cell"]}
                                        />
                                    );
                                })}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className={styles.legend}>
                    {chartData.map((entry, index) => (
                        <div key={index} className={`text-12-500-140 ${styles["legend-item"]}`}>
                            {entry.name} ({entry.appointments})
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
