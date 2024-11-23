import { IoNotificationsOutline } from "react-icons/io5";
import styles from './AlertNotifications.module.scss';

const AlertNotifications: React.FC = () => {
    return (
        <div className={styles["alertNotificationBtn"]}>
            <IoNotificationsOutline size={25} color="#001e62" />
        </div>
    );
}

export default AlertNotifications;