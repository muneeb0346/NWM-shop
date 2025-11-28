"use client";

import PlusIcon from "@components/ui/icons/PlusIcon";
import styles from "./page.module.css";
import DashboardButton from "@components/ui/buttons/DahsboardButton";
import ShareIcon from "@components/ui/icons/ShareIcon";
import AddFriendIcon from "@components/ui/icons/AddFriendIcon";
import CircledPlusIcon from "@components/ui/icons/CircledPlusIcon";
import DashboardCard from "@components/ui/cards/DashboardCard";
import CircledHashTagIcon from "@components/ui/icons/CircledHashTagIcon";
import WalletIcon from "@components/ui/icons/WalletIcon";
import CircledGivingHandIcon from "@components/ui/icons/CircledGivingHandIcon";
import CircledSparkIcon from "@components/ui/icons/CircledSparkIcon";
import BookingInsightsChart from "@/components/charts/BookingInsightsChart";

export default function DashboardPage() {
    return (
        <section className={styles.overview}>
            <div className={styles["page-header"]}>
                <div className={styles["header-content"]}>
                    <h1 className="head-40-600-120">Dashboard Overview</h1>
                    <p className="text-16-500-130">Get a quick snapshot of your shop’s performance — bookings, payments — all in one place.</p>
                </div>
                <div className={styles["header-menu"]}>
                    <DashboardButton icon={PlusIcon} text="Invite Staff" />
                    <DashboardButton icon={ShareIcon} text="Booking Link" />
                    <DashboardButton icon={AddFriendIcon} text="View All Requests" />
                    <DashboardButton icon={CircledPlusIcon} text="New Booking" variant="theme" />
                </div>
            </div>
            <div className={styles["dashboard-content"]}>
                <div className={styles["content-left"]}>
                    <div className={styles.cards}>
                        <DashboardCard Icon={CircledHashTagIcon} heading="Bookings" valueText="240" trendText="9.97%" trendContextText="last month" />
                        <DashboardCard Icon={WalletIcon} heading="Revenue" valueText="$842,450" trendText="9.97%" trendContextText="last month" />
                        <DashboardCard Icon={CircledGivingHandIcon} heading="Avg Booking Value" valueText="$1,254" trendDirection="downwards" trendText="3.51%" trendContextText="last month" />
                        <DashboardCard Icon={CircledSparkIcon} heading="No Show Rate" valueText="5%" trendText="9.97%" trendContextText="last month" />
                    </div>
                    <BookingInsightsChart />
                </div>
                <div className={styles["content-right"]}>
                </div>
            </div>
        </section>
    );
}