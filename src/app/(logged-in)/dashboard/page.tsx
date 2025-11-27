import PlusIcon from "@components/ui/icons/PlusIcon";
import styles from "./page.module.css";
import DashBoardButton from "@components/ui/buttons/DahsboardButton";
import ShareIcon from "@components/ui/icons/ShareIcon";
import AddFriendIcon from "@components/ui/icons/AddFriendIcon";
import CircledPlusIcon from "@components/ui/icons/CircledPlusIcon";

export default function DashboardPage() {
    return (
        <section className={styles.overview}>
            <div className={styles["page-header"]}>
                <div className={styles["header-content"]}>
                    <h1 className="head-40-600-120">Dashboard Overview</h1>
                    <p className="text-16-500-130">Get a quick snapshot of your shop’s performance — bookings, payments — all in one place.</p>
                </div>
                <div className={styles["header-menu"]}>
                    <DashBoardButton icon={PlusIcon} text="Invite Staff" />
                    <DashBoardButton icon={ShareIcon} text="Booking Link" />
                    <DashBoardButton icon={AddFriendIcon} text="View All Requests" />
                    <DashBoardButton icon={CircledPlusIcon} text="New Booking" variant="theme" />
                </div>
            </div>
        </section>
    );
}