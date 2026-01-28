import styles from "./LoggedInHeader.module.css";
import { NotificationsProvider } from "@contexts/NotificationsContext";
import NotificationsButton from "@components/ui/buttons/NotificationsButton";
import UserProfile from "@components/dashboards/UserProfile";

export default function LoggedInHeader() {
    return (
        <header className={styles.header}>
            <NotificationsProvider>
                <NotificationsButton />
            </NotificationsProvider>
            <div className={styles["separator-vertical"]}></div>
            <UserProfile />
        </header>
    );
}