import { PiUserCircleLight } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from './MyAccount.module.scss';

const MyAccount: React.FC = () => {
    return (
        <button className={styles["myAccountBtn"]}>
            <PiUserCircleLight size={30} color="#001e62" />

            <p>Entrar</p>

            <MdKeyboardArrowRight className={styles["icon__arrow-header"]} size={25} color="#B7B9DE" />
        </button>
    );
}

export default MyAccount;