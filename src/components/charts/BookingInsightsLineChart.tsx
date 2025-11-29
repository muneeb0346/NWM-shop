"use client";

import styles from "./BookingInsightsLineChart.module.css";
import DashBoardstyles from "@styles/DashboardStyles.module.css";
import DateRangeButton from "@components/ui/buttons/DateRangeButton";
import ChartTooltip from "@components/ui/tooltips/ChartTooltip";
import { useBookingInsights } from "@contexts/BookingInsightsContext";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function BookingInsightsLineChart() {
    const { startDate, endDate, dateRangeLabel, currentData, minDate, maxDate, setSelectedRange } = useBookingInsights();
    const maxTicks = 7;
    const chartData = currentData.map((d, i) => ({ d: i + 1, appointments: d.appointments, label: d.date }));
    const rangeDays = startDate && endDate ? Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1) : chartData.length;
    const days = chartData.length ? chartData.length : (rangeDays || 1);
    const labelByDay: Record<number, string> = Object.fromEntries(
        chartData.length
            ? chartData.map((x) => [x.d, x.label])
            : Array.from({ length: days }, (_, i) => {
                const d = startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i) : new Date();
                const label = d.toLocaleString("default", { month: "short" }) + " " + String(d.getDate()).padStart(2, "0");
                return [i + 1, label] as [number, string];
              })
    );
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
        <div className={DashBoardstyles.card}>
            <div className={DashBoardstyles["card-header"]}>
                <h3 className="head-20-600-130">Booking Insights</h3>
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
                            tick={{ className: `text-12-500-140 ${DashBoardstyles["axis-tick"]}` }}
                            interval={0}
                            ticks={tickDays}
                            tickFormatter={(v: number) => labelByDay[v] ?? ""}
                            tickMargin={10}
                            padding={{ left: 20, right: 20 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ className: `text-12-500-140 ${DashBoardstyles["y-axis-tick"]}`, textAnchor: "start", dx: -22 }}
                            domain={[0, 35]}
                            ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
                            tickMargin={0}
                            width={32}
                        />
                        <Tooltip
                            content={<ChartTooltip valueLabel="Appointments" />}
                            cursor={{ className: DashBoardstyles.cursor }}
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
