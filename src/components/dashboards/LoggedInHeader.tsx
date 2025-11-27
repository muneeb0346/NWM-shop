import styles from "./LoggedInHeader.module.css";
import NotificationsButton from "@components/ui/buttons/NotificationsButton";
import UserProfile from "@components/dashboards/UserProfile";

export default function LoggedInHeader() {
    return (
        <header className={styles.header}>
            <NotificationsButton />
            <div className={styles["separator-vertical"]}></div>
            <UserProfile />
        </header>
    );
}