"use client";

import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";
import Dropdown from "@components/ui/dropdowns/Dropdown";
import ChartTooltip from "@components/ui/tooltips/ChartTooltip";
import styles from "./TopArtistsChart.module.css";

const mockData = {
    "December 2024": [
        { name: "Clara Jensen", appointments: 35 },
        { name: "Sophie Langley", appointments: 50 },
        { name: "Ethan", appointments: 25 },
        { name: "Luca Moretti", appointments: 30 },
        { name: "Ayra Voss", appointments: 38 }
    ],
    "November 2024": [
        { name: "Clara Jensen", appointments: 28 },
        { name: "Sophie Langley", appointments: 42 },
        { name: "Ethan", appointments: 32 },
        { name: "Luca Moretti", appointments: 25 },
        { name: "Ayra Voss", appointments: 35 }
    ]
};

const RoundedBar = (props: {
    fill?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    index?: number;
    maxIndex?: number;
    hoveredIndex?: number | null;
    onHover?: (index: number | null) => void;
}) => {
    const { fill, x, y, width, height, index, maxIndex, hoveredIndex, onHover } = props;

    if (!height || height <= 0 || !x || !y || !width || index === undefined) return null;
    const radius = width / 2;

    const shouldShowGradient = hoveredIndex !== null
        ? hoveredIndex === index
        : index === maxIndex;

    return (
        <g
            onMouseEnter={() => onHover?.(index)}
            onMouseLeave={() => onHover?.(null)}
        >
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={shouldShowGradient ? "url(#barGradient)" : fill}
                rx={radius}
                ry={radius}
                style={{ cursor: "pointer" }}
            />
        </g>
    );
};

export default function TopArtistsChart() {
    const [selectedMonth, setSelectedMonth] = useState("December 2024");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const availableMonths = ["December 2024", "November 2024"];
    const chartData = mockData[selectedMonth as keyof typeof mockData];

    const maxIndex = chartData.reduce(
        (maxIdx, item, idx, arr) =>
            item.appointments > arr[maxIdx].appointments ? idx : maxIdx,
        0
    );

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="heading-h6-600">Top Artists</h3>
                <Dropdown
                    options={availableMonths}
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                />
            </div>
            <div className={styles["chart-container"]}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                        barCategoryGap="20%"
                    >
                        <CartesianGrid
                            strokeDasharray="0"
                            stroke="var(--stroke-pale)"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ className: `text-12-500-140 ${styles["axis-tick"]}` }}
                            tickMargin={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ className: `text-12-500-140 ${styles["y-axis-tick"]}`, textAnchor: "start", dx: -22 }}
                            domain={[0, 50]}
                            ticks={[0, 10, 20, 30, 40, 50]}
                            tickMargin={0}
                            width={28}
                        />
                        <Tooltip
                            content={<ChartTooltip valueLabel="Appointments" />}
                            cursor={{ fill: "transparent" }}
                        />
                        <Bar
                            dataKey="appointments"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            shape={(props: any) => (
                                <RoundedBar
                                    {...props}
                                    maxIndex={maxIndex}
                                    hoveredIndex={hoveredIndex}
                                    onHover={setHoveredIndex}
                                />
                            )}
                            maxBarSize={44}
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill="var(--bg-primary-pale)"
                                />
                            ))}
                        </Bar>
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="18.27%" stopColor="var(--bg-primary-normal)" />
                                <stop offset="98.68%" stopColor="var(--bg-pending-bold)" />
                            </linearGradient>
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
