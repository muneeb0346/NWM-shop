import styles from "./Sidebar.module.css"
import Logo from "../ui/Logo";
import LogoutButton from "../ui/buttons/LogoutButton";

export default function Sidebar() {
    return (
        <div className="overlay-background">
            <aside>
                <nav className={styles.nav}>
                    <Logo />
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Dashboard</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Appointments</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Clients</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Payments</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Settings</a>
                        </li>
                    </ul>
                    <LogoutButton />
                </nav>
            </aside>
        </div>
    );
}