"use client";
import styles from "./UpcomingAppointments.module.css";
import dashboardStyles from "@styles/DashboardStyles.module.css";
import { useUpcomingAppointments } from "@contexts/UpcomingAppointmentsContext";
import DateRangeButton from "@components/ui/buttons/DateRangeButton";
import EllipsisButton from "@components/ui/buttons/EllipsisButton";
import ArrowRedirectButton from "@components/ui/buttons/ArrowRedirectButton";

const typeToEmoji: Record<"consultation" | "tattoo-session" | "flash", string> = {
    consultation: "💬",
    "tattoo-session": "✒️",
    flash: "✨",
};

export default function UpcomingAppointments() {
    const { date, setDate, appointments } = useUpcomingAppointments();

    return (
        <div className={`${dashboardStyles.card}`}>
            <div className={dashboardStyles["card-header"]}>
                <h3 className="head-20-600-130">Upcoming Appointments</h3>
                <div className={styles.headerControls}>
                    <DateRangeButton
                        mode="single"
                        placeholder="Select date"
                        onChangeSingle={(d) => {
                            const [dd, mm, yyyy] = d.split("/").map(Number);
                            setDate(new Date(yyyy!, (mm! - 1), dd!));
                        }}
                        initialDate={`${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`}
                    />
                    <ArrowRedirectButton href="/bookings" />
                </div>
            </div>
            <div className={styles.listWrapper}>
                {appointments.length === 0 && (
                    <p className={`${styles.empty} text-12-400-140`}>No appointments scheduled for this day.</p>
                )}
                {appointments.map((a) => {
                    const emoji = typeToEmoji[a.type] || "💬";
                    const start = new Date(a.start);
                    const end = new Date(a.end);
                    const timeRange = `${start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
                    return (
                        <div key={a.id} className={styles.appointmentRow}>
                            <div className={styles.profile}>
                                <div className={styles.iconBox}>
                                    <span className={styles.emoji}>{emoji}</span>
                                </div>
                                <div>
                                    <p className="text-14-600-130">{a.title}</p>
                                    <p className={`${styles.timeText} text-12-400-140`}>{timeRange}</p>
                                </div>
                            </div>
                            <EllipsisButton onClick={() => { /* future actions */ }} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
