"use client";

import styles from "./BookingInsightsChart.module.css";
import Dropdown from "@components/ui/dropdowns/Dropdown";
import ChartTooltip from "@components/ui/tooltips/ChartTooltip";
import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface DataPoint {
    date: string;
    appointments: number;
}

interface MonthData {
    [key: string]: DataPoint[];
}

const mockData: MonthData = {
    "December 2024": [
        { date: "Dec 01", appointments: 10 },
        { date: "Dec 02", appointments: 8 },
        { date: "Dec 03", appointments: 17 },
        { date: "Dec 04", appointments: 15 },
        { date: "Dec 05", appointments: 19 },
        { date: "Dec 06", appointments: 12 },
        { date: "Dec 07", appointments: 23 },
        { date: "Dec 08", appointments: 18 },
        { date: "Dec 09", appointments: 16 },
        { date: "Dec 10", appointments: 14 },
        { date: "Dec 11", appointments: 20 },
        { date: "Dec 12", appointments: 22 },
        { date: "Dec 13", appointments: 19 },
        { date: "Dec 14", appointments: 15 },
        { date: "Dec 15", appointments: 17 },
        { date: "Dec 16", appointments: 21 },
        { date: "Dec 17", appointments: 18 },
        { date: "Dec 18", appointments: 16 },
        { date: "Dec 19", appointments: 14 },
        { date: "Dec 20", appointments: 19 },
        { date: "Dec 21", appointments: 23 },
        { date: "Dec 22", appointments: 20 },
        { date: "Dec 23", appointments: 18 },
        { date: "Dec 24", appointments: 12 },
        { date: "Dec 25", appointments: 8 },
        { date: "Dec 26", appointments: 10 },
        { date: "Dec 27", appointments: 15 },
        { date: "Dec 28", appointments: 19 },
        { date: "Dec 29", appointments: 21 },
        { date: "Dec 30", appointments: 22 },
        { date: "Dec 31", appointments: 17 },
    ],
    "November 2024": [
        { date: "Nov 01", appointments: 12 },
        { date: "Nov 02", appointments: 14 },
        { date: "Nov 03", appointments: 16 },
        { date: "Nov 04", appointments: 15 },
        { date: "Nov 05", appointments: 18 },
        { date: "Nov 06", appointments: 20 },
        { date: "Nov 07", appointments: 17 },
        { date: "Nov 08", appointments: 19 },
        { date: "Nov 09", appointments: 21 },
        { date: "Nov 10", appointments: 18 },
        { date: "Nov 11", appointments: 16 },
        { date: "Nov 12", appointments: 14 },
        { date: "Nov 13", appointments: 15 },
        { date: "Nov 14", appointments: 17 },
        { date: "Nov 15", appointments: 19 },
        { date: "Nov 16", appointments: 22 },
        { date: "Nov 17", appointments: 20 },
        { date: "Nov 18", appointments: 18 },
        { date: "Nov 19", appointments: 16 },
        { date: "Nov 20", appointments: 14 },
        { date: "Nov 21", appointments: 15 },
        { date: "Nov 22", appointments: 17 },
        { date: "Nov 23", appointments: 19 },
        { date: "Nov 24", appointments: 21 },
        { date: "Nov 25", appointments: 18 },
        { date: "Nov 26", appointments: 16 },
        { date: "Nov 27", appointments: 14 },
        { date: "Nov 28", appointments: 15 },
        { date: "Nov 29", appointments: 17 },
        { date: "Nov 30", appointments: 19 },
    ],
};

export default function BookingInsightsChart() {
    const availableMonths = Object.keys(mockData);
    const [selectedMonth, setSelectedMonth] = useState(availableMonths[0]);
    const currentData = mockData[selectedMonth] || [];
    const maxTicks = 7;
    const chartData = currentData.map((d, i) => ({ d: i + 1, appointments: d.appointments, label: d.date }));
    const days = chartData.length || 1;
    const labelByDay: Record<number, string> = Object.fromEntries(chartData.map((x) => [x.d, x.label]));
    const tickDays: number[] = (() => {
        if (days <= maxTicks) return Array.from({ length: days }, (_, i) => i + 1);
        const step = (days - 1) / (maxTicks - 1);
        const picks: number[] = [];
        for (let i = 0; i < maxTicks; i++) {
            const idx = Math.round(i * step) + 1;
            picks.push(idx);
        }
        return Array.from(new Set(picks));
    })();

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="head-20-600-130">Booking Insights</h3>
                <Dropdown
                    options={availableMonths}
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                />
            </div>
            <div className={styles["chart-container"]}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid
                            strokeDasharray="0"
                            stroke="var(--stroke-pale)"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="d"
                            type="number"
                            domain={[1, days]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ className: `text-12-500-140 ${styles["axis-tick"]}` }}
                            interval={0}
                            ticks={tickDays}
                            tickFormatter={(v: number) => labelByDay[v] ?? ""}
                            tickMargin={10}
                            padding={{ left: 20, right: 20 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ className: `text-12-500-140 ${styles["y-axis-tick"]}`, textAnchor: "start", dx: -22 }}
                            domain={[0, 35]}
                            ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
                            tickMargin={0}
                            width={32}
                        />
                        <Tooltip
                            content={<ChartTooltip valueLabel="Appointments" />}
                            cursor={{ className: styles.cursor }}
                        />
                        <Line
                            type="monotone"
                            dataKey="appointments"
                            stroke="var(--bg-primary-normal)"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ className: styles["active-dot"] }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
