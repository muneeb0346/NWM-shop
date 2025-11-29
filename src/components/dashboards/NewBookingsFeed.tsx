"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NewBookingsFeed.module.css";
import DashboardStyles from "@styles/DashboardStyles.module.css";
import Dropdown from "@components/ui/dropdowns/Dropdown";
import StatusBadge from "@components/ui/tags/StatusBadge";
import Image from "next/image";

interface Booking {
    artistName: string;
    artistAvatar: string;
    clientName: string;
    bookingType: string;
    style: string;
    date: string;
    time: string;
    status: "new" | "deposit-requested" | "deposit-paid" | "scheduled" | "upcoming";
    statusText: string;
}

const mockBookings: Booking[] = [
    { artistName: "Ayra Voss", artistAvatar: "/icons/artist-dp-1.png", clientName: "Martin Torff", bookingType: "💬 Consultation", style: "realism", date: "📅 Tue, Aug 20, 2025", time: "⏰ 11:00 AM – 1:00 PM", status: "new", statusText: "New" },
    { artistName: "Luca Moretti", artistAvatar: "/icons/artist-dp-2.png", clientName: "Cheyenne Lipshutz", bookingType: "✒️ Tattoo Session", style: "Blackwork", date: "📅 Tue, Aug 20, 2025", time: "⏰ 3:00 PM – 4:00 PM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Ethan", artistAvatar: "/icons/artist-dp-3.png", clientName: "Davis", bookingType: "✨ Flash", style: "realism", date: "📅 Wed, Aug 21, 2025", time: "⏰ 2:30 PM – 2:30 PM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Sophie Langley", artistAvatar: "/icons/artist-dp-4.png", clientName: "Haylie Bator", bookingType: "✒️ Tattoo Session", style: "Fine Line", date: "📅 Thu, Aug 22, 2025", time: "⏰ 10:00 AM – 11:30 AM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Clara Jensen", artistAvatar: "/icons/artist-dp-5.png", clientName: "Maren Levin", bookingType: "💬 Consultation", style: "Tribal", date: "📅 Fri, Aug 23, 2025", time: "⏰ 2:00 PM – 5:00 PM", status: "upcoming", statusText: "Upcoming" },
    { artistName: "Noah Reed", artistAvatar: "/icons/artist-dp-6.png", clientName: "Jules Patton", bookingType: "💬 Consultation", style: "Neo Trad", date: "📅 Sat, Aug 24, 2025", time: "⏰ 9:00 AM – 9:30 AM", status: "new", statusText: "New" },
    { artistName: "Aria Stone", artistAvatar: "/icons/artist-dp-7.png", clientName: "Kieran Moss", bookingType: "✨ Flash", style: "Linework", date: "📅 Sat, Aug 24, 2025", time: "⏰ 11:00 AM – 12:00 PM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Miles Porter", artistAvatar: "/icons/artist-dp-8.png", clientName: "Val Cruz", bookingType: "✒️ Tattoo Session", style: "Dotwork", date: "📅 Sat, Aug 24, 2025", time: "⏰ 1:00 PM – 3:00 PM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Hazel Quinn", artistAvatar: "/icons/artist-dp-9.png", clientName: "Erin Blake", bookingType: "💬 Consultation", style: "Fine Line", date: "📅 Sun, Aug 25, 2025", time: "⏰ 10:00 AM – 10:30 AM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Jasper Cole", artistAvatar: "/icons/artist-dp-10.png", clientName: "Nolan Fray", bookingType: "✨ Flash", style: "Tribal", date: "📅 Sun, Aug 25, 2025", time: "⏰ 11:00 AM – 11:30 AM", status: "upcoming", statusText: "Upcoming" },
    { artistName: "Ivy Mercer", artistAvatar: "/icons/artist-dp-11.png", clientName: "Rae Dillon", bookingType: "💬 Consultation", style: "Blackwork", date: "📅 Sun, Aug 25, 2025", time: "⏰ 3:00 PM – 3:30 PM", status: "new", statusText: "New" },
    { artistName: "Zane Fowler", artistAvatar: "/icons/artist-dp-12.png", clientName: "Tess Nolan", bookingType: "✒️ Tattoo Session", style: "realism", date: "📅 Mon, Aug 26, 2025", time: "⏰ 9:00 AM – 10:30 AM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Elle Chan", artistAvatar: "/icons/artist-dp-13.png", clientName: "Milo Chen", bookingType: "✨ Flash", style: "Fine Line", date: "📅 Mon, Aug 26, 2025", time: "⏰ 11:00 AM – 11:30 AM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Rowan Hale", artistAvatar: "/icons/artist-dp-14.png", clientName: "Dana Price", bookingType: "✒️ Tattoo Session", style: "Dotwork", date: "📅 Mon, Aug 26, 2025", time: "⏰ 1:00 PM – 2:00 PM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Kara Finch", artistAvatar: "/icons/artist-dp-15.png", clientName: "Owen Yates", bookingType: "💬 Consultation", style: "Neo Trad", date: "📅 Mon, Aug 26, 2025", time: "⏰ 4:00 PM – 4:30 PM", status: "upcoming", statusText: "Upcoming" },
    { artistName: "Silas Grey", artistAvatar: "/icons/artist-dp-16.png", clientName: "Pia Long", bookingType: "💬 Consultation", style: "Linework", date: "📅 Tue, Aug 27, 2025", time: "⏰ 9:00 AM – 9:30 AM", status: "new", statusText: "New" },
    { artistName: "Mira Knox", artistAvatar: "/icons/artist-dp-17.png", clientName: "Zoe Shaw", bookingType: "✨ Flash", style: "Tribal", date: "📅 Tue, Aug 27, 2025", time: "⏰ 10:00 AM – 10:30 AM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Theo Marsh", artistAvatar: "/icons/artist-dp-18.png", clientName: "Lia Green", bookingType: "✒️ Tattoo Session", style: "Blackwork", date: "📅 Tue, Aug 27, 2025", time: "⏰ 1:00 PM – 3:00 PM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Rhea Bram", artistAvatar: "/icons/artist-dp-19.png", clientName: "Eli Ford", bookingType: "💬 Consultation", style: "realism", date: "📅 Tue, Aug 27, 2025", time: "⏰ 4:00 PM – 4:30 PM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Dane Irwin", artistAvatar: "/icons/artist-dp-20.png", clientName: "Gwen Hart", bookingType: "✨ Flash", style: "Fine Line", date: "📅 Wed, Aug 28, 2025", time: "⏰ 9:00 AM – 9:30 AM", status: "upcoming", statusText: "Upcoming" }
];

export default function NewBookingsFeed() {
    const [filterValue, setFilterValue] = useState("All Status");

    const bookingsToRender = useMemo(() => {
        let filtered: Booking[];
        if (filterValue === "All Status") {
            filtered = mockBookings;
        } else {
            const map: Record<string, Booking["status"]> = {
                "New": "new",
                "Deposit Requested": "deposit-requested",
                "Deposit Paid": "deposit-paid",
                "Scheduled": "scheduled",
                "Upcoming": "upcoming"
            };
            const status = map[filterValue];
            filtered = mockBookings.filter(b => b.status === status);
        }
        return filtered.map((booking, idx) => ({
            ...booking,
            isVisible: idx < 5
        }));
    }, [filterValue]);

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
            <div className={styles.table}>
                <div className={styles["table-header-row"]}>
                    <div className={`${styles.cell} ${styles.artist}`}><span className="text-14-600-130">Artist Name</span></div>
                    <div className={`${styles.cell} ${styles.client}`}><span className="text-14-600-130">Client Name</span></div>
                    <div className={`${styles.cell} ${styles.type}`}><span className="text-14-600-130">Booking Type</span></div>
                    <div className={`${styles.cell} ${styles.style}`}><span className="text-14-600-130">Style</span></div>
                    <div className={`${styles.cell} ${styles.datetime}`}><span className="text-14-600-130">Date & Time</span></div>
                    <div className={`${styles.cell} ${styles.status}`}><span className="text-14-600-130">Status</span></div>
                </div>
                <div className={styles.body}>
                    <AnimatePresence mode="popLayout">
                        {bookingsToRender
                            .filter(booking => booking.isVisible)
                            .map((booking) => (
                                <motion.div
                                    key={`${booking.artistName}-${booking.clientName}-${booking.date}`}
                                    className={styles["table-row"]}
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
                                    <div className={`${styles.cell} ${styles.artist}`}>
                                        <Image src={booking.artistAvatar} alt={booking.artistName} width={24} height={24} className={styles.avatar} />
                                        <span className="text-12-500-140">{booking.artistName}</span>
                                    </div>
                                    <div className={`${styles.cell} ${styles.client}`}>
                                        <span className="text-12-500-140">{booking.clientName}</span>
                                    </div>
                                    <div className={`${styles.cell} ${styles.type}`}>
                                        <span className="text-12-400-140">{booking.bookingType}</span>
                                    </div>
                                    <div className={`${styles.cell} ${styles.style}`}>
                                        <span className="text-12-400-140">{booking.style}</span>
                                    </div>
                                    <div className={`${styles.cell} ${styles.datetime}`}>
                                        <div className={`text-12-400-140 ${styles["date-time"]}`}>{booking.date}<br />{booking.time}</div>
                                    </div>
                                    <div className={`${styles.cell} ${styles.status}`}>
                                        <StatusBadge variant={booking.status} text={booking.statusText} />
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
