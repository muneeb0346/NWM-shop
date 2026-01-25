"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NewBookingsFeed.module.css";
import DashboardStyles from "@styles/DashboardStyles.module.css";
import TableStyles from "@styles/TableStyles.module.css";
import Dropdown from "@components/ui/dropdowns/Dropdown";
import StatusBadge from "@components/ui/tags/StatusBadge";
import Image from "next/image";
import { useNewBookings, Booking } from "@contexts/NewBookingsContext";

export default function NewBookingsFeed() {
    const { bookings } = useNewBookings();
    const [filterValue, setFilterValue] = useState("All Status");

    const bookingsToRender = useMemo(() => {
        let filtered: Booking[];
        if (filterValue === "All Status") {
            filtered = bookings;
        } else {
            const map: Record<string, Booking["status"]> = {
                "New": "new",
                "Deposit Requested": "deposit-requested",
                "Deposit Paid": "deposit-paid",
                "Scheduled": "scheduled",
                "Upcoming": "upcoming"
            };
            const status = map[filterValue];
            filtered = bookings.filter(b => b.status === status);
        }
        return filtered.map((booking, idx) => ({
            ...booking,
            isVisible: idx < 5
        }));
    }, [bookings, filterValue]);
    return (
        <div className={DashboardStyles.card}>
            <div className={DashboardStyles["card-header"]}>
                <h3 className="head-20-600-130">New Bookings Feed</h3>
                <Dropdown
                    options={["All Status", "New", "Deposit Requested", "Deposit Paid", "Scheduled", "Upcoming"]}
                    value={filterValue}
                    onChange={setFilterValue}
                />
            </div>
            <div className={TableStyles.table}>
                <div className={TableStyles["table-content-wrapper"]}>
                    <div className={TableStyles["table-header-row"]}>
                        <div className={`${TableStyles.cell} ${styles.artist}`}><span className="text-14-600-130">Artist Name</span></div>
                        <div className={`${TableStyles.cell} ${styles.client}`}><span className="text-14-600-130">Client Name</span></div>
                        <div className={`${TableStyles.cell} ${styles.type}`}><span className="text-14-600-130">Booking Type</span></div>
                        <div className={`${TableStyles.cell} ${styles.style}`}><span className="text-14-600-130">Style</span></div>
                        <div className={`${TableStyles.cell} ${styles.datetime}`}><span className="text-14-600-130">Date & Time</span></div>
                        <div className={`${TableStyles.cell} ${styles.status}`}><span className="text-14-600-130">Status</span></div>
                    </div>
                    <div className={TableStyles.body}>
                        <AnimatePresence mode="popLayout">
                            {bookingsToRender
                                .filter(booking => booking.isVisible)
                                .map((booking) => (
                                    <motion.div
                                        key={`${booking.artistName}-${booking.clientName}-${booking.date}`}
                                        className={TableStyles["table-row"]}
                                        layout
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            layout: { duration: 0.3, ease: "easeOut" },
                                            opacity: { duration: 0.3, ease: "easeOut" },
                                            height: { duration: 0.3, ease: "easeOut" }
                                        }}
                                    >
                                        <div className={`${TableStyles.cell} ${styles.artist}`}>
                                            <Image src={booking.artistAvatar} alt={booking.artistName} width={24} height={24} className={TableStyles.avatar} />
                                            <span className="text-12-500-140">{booking.artistName}</span>
                                        </div>
                                        <div className={`${TableStyles.cell} ${styles.client}`}>
                                            <span className="text-12-500-140">{booking.clientName}</span>
                                        </div>
                                        <div className={`${TableStyles.cell} ${styles.type}`}>
                                            <span className="text-12-400-140">{booking.bookingType}</span>
                                        </div>
                                        <div className={`${TableStyles.cell} ${styles.style}`}>
                                            <span className="text-12-400-140">{booking.style}</span>
                                        </div>
                                        <div className={`${TableStyles.cell} ${styles.datetime}`}>
                                            <div className={`text-12-400-140 ${styles["date-time"]}`}>{booking.date}<br />{booking.time}</div>
                                        </div>
                                        <div className={`${TableStyles.cell} ${styles.status}`}>
                                            <StatusBadge variant={booking.status} text={booking.statusText} />
                                        </div>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
